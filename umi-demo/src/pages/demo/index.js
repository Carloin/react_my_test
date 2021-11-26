import React from 'react';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined, ScissorOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import img from '../../image/test.jpg'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// 过滤掉所有<i>元素
function filter(node) {
    return (node.tagName !== 'i');
}
const DomToImg = () => {
    // 生成图片自动下载为png格式（将dom转为二进制再编译下载）
    const getBlobPng = () => {
        const node = document.getElementById("node");
        // domtoimage.toBlob
        domtoimage.toPng(node).then((blob) => {
            // const img = new Image();
            // img.src = blob;
            // img.setAttribute('className', 'pngImg');
            // document.getElementById('export-img').appendChild(img);
            //  img.addEventListener('click', () => {
            //     var link = document.createElement('a');
            //     link.download = 'png';
            //     link.href = defaultUrl;
            //     link.click();
            // })
            // 调用file-save方法 直接保存图片
            saveAs(blob)
        })
    }
    // 转为Jpeg图片  --- 手动下载（自动下载调用saveAs(defaultUrl, '自动保存.png'))
    const getJpeg = () => {
        const node = document.getElementById("node");
        domtoimage.toJpeg(node)
            .then((defaultUrl) => {
                //  const img = new Image();
                // img.src = defaultUrl;
                // img.setAttribute('className', 'jpgImg');
                // document.getElementById('export-img').appendChild(img);
                saveAs(defaultUrl)
            });
    }
    // 转为SVG图片---手动下载 （自动下载调用saveAs(defaultUrl, '自动保存.png'))
    const getSVG = () => {
        const node = document.getElementById("node");
        domtoimage.toSvg(node, { filter: filter })
            .then((defaultUrl) => {
                // const img = new Image();
                // img.src = defaultUrl;
                // img.setAttribute('className', 'svgImg');
                // document.getElementById('export-img').appendChild(img);
                // img.addEventListener('click', () => {
                //     var link = document.createElement('a');
                //     link.download = 'SVG';
                //     link.href = defaultUrl;
                //     link.click();
                // })
                saveAs(defaultUrl)
            });
    }
    const getPdf = () => {
        const element = document.getElementById('node');  // 这个dom元素是要导出的pdf的div容器
        //    第二种方法，可分页，通过将postion设置为负数，但是添加不了页边距
        // const w = element.offsetWidth;  // 获得该容器的宽
        // const h = element.offsetHeight;  // 获得该容器的高
        // const offsetTop = element.offsetTop; // 获得该容器到文档顶部的距离  
        // const offsetLeft = element.offsetLeft; // 获得该容器到文档最左的距离
        // // const canvas = document.getElementById("canvas");
        // // const mytest = React.createElement('canvas', {id: 'mytest'});
        // const canvas = document.createElement("canvas");
        // let abs = 0;
        // const win_i = document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
        // const win_o = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
        // if (win_o > win_i) {
        //     abs = (win_o - win_i) / 2; // 获得滚动条宽度的一半
        // }
        // canvas.width = w * 2; // 将画布宽&&高放大两倍
        // canvas.height = h * 2;
        // canvas.textAlign="right";
        // const context = canvas.getContext('2d');
        // context.scale(2, 2);
        // context.translate(-offsetLeft - abs, -offsetTop);
        // // 这里默认横向没有滚动条的情况，因为offset.left()，有无滚动条的时候存在差值，因此translate的时候，要把这个差值去掉
        // html2canvas(element, {
        //     allowTaint: true,
        //     scale: 2 // 提升画面质量，但是会增加文件大小
        // }).then(canvas => {
        //     const contentWidth = canvas.width;
        //     const contentHeight = canvas.height;
        //     // 一页pdf显示html页面生成的canvas高度
        //     const pageHeight = contentWidth / 592.28 * 841.89;
        //     // 未生成pdf的html页面高度
        //     let leftHeight = contentHeight;
        //     // 页面偏移
        //     let position = 0;
        //     // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        //     const imgWidth = 595.28;
        //     const imgHeight = 592.28 / contentWidth * contentHeight;

        //     const pageDate = canvas.toDataURL('image/jpeg', 1.0);

        //     const pdf = new jsPDF('', 'pt', 'a4');
        //     // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面的高度（841.89）
        //     // 当内容未超过pdf一页显示的范围，无需分页
        //     if (leftHeight < pageHeight) {
        //         pdf.addImage(pageDate, 'JPEG', 0, position, imgWidth, imgHeight);
        //     } else { // 分页
        //         while (leftHeight > 0) {
        //             pdf.addImage(pageDate, 'JPEG', 0,position, imgWidth, imgHeight)
        //             leftHeight -= pageHeight;
        //             position -= 841.89;
        //             // 避免添加空白页
        //             if (leftHeight > 0) {
        //                 pdf.addPage()
        //             }
        //         }
        //     }
        //     pdf.save('下载PDF.pdf');
        // })
        
        // 第一种方法，单页，无法分页
        // html2canvas(document.getElementById("node")).then(function (canvas) {
        //     const contentWidth = canvas.width;
        //     const contentHeight = canvas.height;
        //     const pageData = canvas.toDataURL('image/jpeg', 1.0);
        //     const pdfX = (contentWidth + 10) / 2 * 0.75;
        //     const pdfY = (contentHeight + 500) / 2 * 0.75;// 500为底部留白     
        //     const imgX = pdfX;
        //     const imgY = (contentHeight / 2 * 0.75); //内容图片这里不需要留白的距离    
        //     const PDF = new jsPDF('', 'pt', [pdfX, pdfY]);
        //     PDF.addImage(pageData, 'jpeg', 0, 0, imgX, imgY);
        //     PDF.save('download.pdf');
        // });
        
        //第三种，可设置页边距
        html2canvas(element, {
        logging: false
        }).then(function (canvas) {
            console.log("canvas",canvas) //<canvas width=​"832" height=​"1564" style=​"width:​ 832px;​ height:​ 1564px;​">​
        var pdf = new jsPDF('p', 'mm', 'a4'); //A4纸，纵向
        var ctx = canvas.getContext('2d'),
            a4w = 190,
            a4h = 277, //A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
            imgHeight = Math.floor(a4h * canvas.width / a4w), //按A4显示比例换算一页图像的像素高度
            renderedHeight = 0;
        while (renderedHeight < canvas.height) {
            var page = document.createElement("canvas");
            page.width = canvas.width;
            page.height = Math.min(imgHeight, canvas.height - renderedHeight); //可能内容不足一页
            //用getImageData剪裁指定区域，并画到前面创建的canvas对象中. getImageData() 复制画布上指定矩形的像素数据，然后通过 putImageData() 将图像数据放回画布：
            page.getContext('2d').putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
            pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 10, 10, a4w, Math.min(a4h, a4w * page.height / page.width)); //添加图像到页面，保留10mm边距
            renderedHeight += imgHeight;
            if (renderedHeight < canvas.height) pdf.addPage(); //如果后面还有内容，添加一个空页
        }
        pdf.save('content.pdf');
        });
}

    return (<div className='dom-to-img'>
        <div className="my-actions">
            <Space>
                <Button onClick={getBlobPng}>
                    <UploadOutlined /> 保存为png
                </Button>
                <Button onClick={getJpeg}>
                    <UploadOutlined /> 保存为jpeg
                </Button>
                <Button onClick={getSVG}>
                    <UploadOutlined /> 转为svg图片
                </Button>
                <Button onClick={getPdf}>
                    <UploadOutlined /> 下载PDF
                </Button>
            </Space>

        </div>
        {/*  可将字体设为较大的字体，这样下载下来字体就不会太小了 */}
        <div id="node" className="node-content" style={{ textAlign: 'left', backgroundColor: '#fff',fontSize:'28px'}}>
            <Button type="primary">
                YES
            </Button>
            or
            <Button type="primary">
                NO
            </Button>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            <div>
                React 从诞生之初就是可被逐步采用的，<br />
                因而你可以按需引入或多或少的 React 特性。<br />
                不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互<br />
            </div>
            
            <ScissorOutlined />
            <img src={img} alt="" style={{ width: '200px', height: '200px' }} />
        </div>
    </div>)
}

export default DomToImg;
