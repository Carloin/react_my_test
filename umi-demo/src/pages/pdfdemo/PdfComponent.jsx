import React, { Component, useState, useMemo, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment';
import {isFunction} from 'lodash';
import './index.less';

// 加载图片，用于获取图片转成base64再重新放入pdf，保证图片质量
const loadImage = async (src) => {

    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let img = new Image;
        // 此处如果不添加crossOrigin，canvas会觉得画布收到污染，是脏的，所以需要添加这个属性
        // 添加之后说明是以跨域发起的图片请求，所以后端服务器需要允许跨域 Access-Control-Allow-Origin: *
        img.crossOrigin = 'Anonymous';
        img.src = src;

        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            let dataURL = canvas.toDataURL('image/png');
            canvas = null;
            resolve(dataURL);
        };
        img.onerror = function (e) {
            console.log('e', e)
            resolve(url);
        }

    });
}



function PdfComponent(props, ref) {
    // 保存A4纸的宽高，单位pt
    const a4Size = {
        w: 595.28,
        h: 841.89
    };

    const {
        plr,
        header,
        content,
        footer,
        decoratePdf,
        scale = 2, // 放大倍数 清晰度相关
        keepImgQuality = false // 是否保证图片质量
    } = props;

    const pdfHeaderRef = useRef(null);
    const pdfContentRef = useRef(null);
    const pdfFooterRef = useRef(null);

    // 存储pdf content的宽高
    const [pdfContentSize, setPdfContentSize] = useState({
        w: a4Size.w - 2 * plr,
        h: a4Size.h
    })
    // 保存dom
    const [pdfHeader, setPdfHeader] = useState(header);
    const [pdfContent, setPdfContent] = useState(content);
    const [pdfFooter, setPdfFooter] = useState(footer);

    // 由于pdf中的单位是英寸，所以在这里需要计算pt和px的比例
    const getRate = () => {
        const dom = document.createElement("div");
        dom.style.width = a4Size.w + 'pt';
        document.body.appendChild(dom);
        const domWidth = Math.ceil(dom.clientWidth);
        document.body.removeChild(dom);
        return a4Size.w / domWidth;
    }
    const rate = getRate();
    // px转为pt的方法
    const px2pt = (px) => {
        return Math.ceil(px * rate);
    }

    // 封装将dom转为img的方法
    const generatePdfImg = async (dom, options = {}) => {
        const {
            scale = 4,
            quality = 1
        } = options;

        const canvas = await html2canvas(
            dom,
            { scale, y: 0, scrollY: 0 }
        );
        let img = canvas.toDataURL('image/jpeg', quality);
        return {
            img,
            // 在这离存储dom生成后的img的宽高 px
            imgSize: {
                w: dom.clientWidth,
                h: dom.clientHeight
            }
        };
    }

    // 将pdf中的所有图片信息保存起来
    // 包括图片base64，宽高，距离生成后dom的定位
    const getPdfImgObjArr = async() => {
        const pdfContentDom = pdfContentRef.current;
        const imgCollection = pdfContentDom.getElementsByTagName('img');
    
        return await Promise.all(Array.from(imgCollection).map(async (img) => {
            const imgObj = {
                img: await loadImage(img.src),
                h: img.clientHeight,
                w: img.clientWidth,
                x: img.offsetLeft - pdfContentDom.offsetLeft,
                y: img.offsetTop - pdfContentDom.offsetTop
            }
            img.style.opacity = 0;
            img.style.width = img.clientWidth + 'px';
            img.style.height = img.clientHeight + 'px';
            // img.src = '';
            return imgObj;
        }))
    }



    // 为页首/内容/页尾添加样式
    useEffect(() => {

        const pdfHeaderDom = pdfHeaderRef.current;
        const pdfContentDom = pdfContentRef.current;
        const pdfFooterDom = pdfFooterRef.current;
        // ehance component
        // 增强组件，为内容数组传进来的每一行添加宽度和左右padding
        const enhanceComp = (c, ind) => (<div style={{
            width: pdfContentSize.w + 'pt',
            paddingLeft: plr + 'pt',
            paddingRight: plr + 'pt'
        }} key={ind}>
            {c}
        </div>);
        setPdfHeader(enhanceComp(pdfHeader));
        setPdfContent(pdfContent.map(enhanceComp));
        setPdfFooter(enhanceComp(pdfFooter));
        // 设置内容宽度/高度
        // 此处计算的是pdf中content允许存放的真实大小
        setPdfContentSize({
            ...pdfContentSize,
            h: px2pt(pdfContentDom.clientHeight - pdfHeaderDom.clientHeight - pdfFooterDom.clientHeight)
        });

    }, []);


    // 暴露导出事件
    useImperativeHandle(ref, () => ({
        // 导出事件
        downloadPdf: async () => {
            const contentEle = pdfContentRef.current;
            const contentWidthPt = px2pt(contentEle.clientWidth);
            // 计算总页数
            const pageTotal = Math.ceil(contentWidthPt / a4Size.w);

            const pdf = new jsPDF('p', 'pt', 'a4');
            // 先创建出需要的页数
            new Array(pageTotal - 1).fill(0).forEach(() => pdf.addPage());

            // 生成三张图片， 页眉 内容 页尾
            const { img: headerImg, imgSize: headerImgSize } = await generatePdfImg(pdfHeaderRef.current, {scale});
            const { img: contentImg, imgSize: contentImgSize } = await generatePdfImg(contentEle, {scale});
            const { img: footerImg, imgSize: footerImgSize } = await generatePdfImg(pdfFooterRef.current, {scale});

            for (let i = 1; i <= pageTotal; i++) {

                pdf.setPage(i);
                // 根据定位和大小将图片放入pdf
                // （距离左边的距离，距离上边的距离，宽度，高度） pt
                pdf.addImage(
                    headerImg, 'JPEG', 
                    0, 0, 
                    a4Size.w, px2pt(headerImgSize.h)
                );
                pdf.addImage(
                    contentImg, 'JPEG', 
                    -(i - 1) * a4Size.w, px2pt(headerImgSize.h), 
                    a4Size.w * pageTotal, px2pt(contentImgSize.h)
                );
                pdf.addImage(
                    footerImg, 'JPEG', 
                    0, px2pt(headerImgSize.h + contentImgSize.h), 
                    a4Size.w, px2pt(footerImgSize.h)
                );


            }

            // 如果需要保证图片质量（即放大后依旧清晰）
            keepImgQuality && (await getPdfImgObjArr()).forEach(item => {
                const pageNumber = Math.ceil(item.x / (contentImgSize.w / pageTotal));
                pdf.setPage(pageNumber);
                pdf.addImage(item.img, 'JPEG', 
                    px2pt(item.x - (contentImgSize.w / pageTotal * (pageNumber - 1))), px2pt(item.y + headerImgSize.h),
                    px2pt(item.w), px2pt(item.h)
                );
            });

            // 是否需要装饰，生成页码
            isFunction(decoratePdf) 
            && decoratePdf(
                pdf, 
                pageTotal,
                {w: px2pt(headerImgSize.w), h: px2pt(headerImgSize.h)},
                {w: px2pt(footerImgSize.w), h: px2pt(footerImgSize.h)}
            )

            pdf.save(`pdf`);

            return;
        }
    }), [pdfContentRef, pdfContentSize]);

    return (
        <div>
            <div id="pdf" >
                <div ref={pdfHeaderRef} id="pdf-header">
                    {pdfHeader}
                </div>
                <div ref={pdfContentRef} id="pdf-content"
                    style={{
                        height: pdfContentSize.h + 'pt',
                    }}
                >
                    {pdfContent}
                </div >
                <div ref={pdfFooterRef} id="pdf-footer">
                    {pdfFooter}
                </div>
            </div >

        </div>
    );
}



export default forwardRef(PdfComponent);
