import React, { Component, useState, useMemo, useRef, useEffect } from 'react';
import PdfComponent from './PdfComponent';
import img from '../../image/test.jpg'
import logo from '../../image/test.jpg'
import './index.less';
import moment from 'moment';
import mockData from './mockData';


function HeaderComponent(props) {
    return <div style={{ padding: '10px 0' }}>
        <img src={logo} />
        <span>
            Header
        </span>
        <hr />
    </div>
}

function Pdf() {
    const pdfRef = useRef(null);
    const downloadPdf = () => {
        pdfRef.current.downloadPdf();
    }


    const Content = [
        <img id='img' key='img' style={{ maxHeight: '200px', width: 'auto' }} src={img} />,
        ...mockData.map((data, ind) => {
            return (
                <div key={data.id}>
                    <h3>{data.title}</h3>
                    {
                        (ind % 8 === 0) && <img key={'img' + ind} style={{ maxHeight: '100px', width: 'auto' }} src={img} />
                    }
                    <div style={{
                        color: 'grey',
                    }}>
                        {
                            data.content.map((content, ind) => (
                                <p key={ind}>{content}</p>
                            ))
                        }
                    </div>
                </div>
            )
        })
    ]

    return (
        <>
            <h3>
                Pdf
            </h3>
            {/* 按钮 */}
            <button onClick={downloadPdf}>Download</button>


            <PdfComponent
                ref={pdfRef} // 组件ref
                plr={23} // 左右边距
                keepImgQuality={true} // 是否保持图片质量
                scale={4} // 用于让html放大n倍后再转为canvas 用于修改生成pdf的清晰度，越清晰pdf大小会越大
                decoratePdf={(pdf, pageTotal, headerSize, footerSize) => { // 装饰pdf，导出pdf对象，用于生成页数之类的修饰信息
                    pdf.setFontSize(9); // 设置字体大小
                    const lineHeight = pdf.getLineHeight(); // 获取行高
                    
                    new Array(pageTotal).fill(0).forEach((item, i) => { // 根据总页数循环添加页码
                        // set page & date
                        pdf.setPage(i + 1);

                        const pageText = (i + 1) + " / " + pageTotal;
                        const timeText = moment().format('YYYY-MM-DD HH:mm');
                        const pageTextX = pdf.internal.pageSize.getWidth() - pdf.getTextWidth(pageText) - 23;
                        const timeTextX = pdf.internal.pageSize.getWidth() - pdf.getTextWidth(timeText) - 23;

                        pdf.text(pageText, pageTextX, (headerSize.h - lineHeight * 2 - 2) / 2);
                        pdf.text(timeText, timeTextX, (headerSize.h - lineHeight * 2 - 2) / 2 + lineHeight + 2);

                        const footerY = pdf.internal.pageSize.getHeight() - footerSize.h + (footerSize.h - lineHeight * 2 - 2) / 2 + lineHeight;
                        pdf.text(pageText, pageTextX, footerY);
                        pdf.text(timeText, timeTextX, footerY + lineHeight + 2);
                    })
                }}
                header={HeaderComponent} // 页眉
                content={Content} // 内容
                footer={<>
                    <hr />
                    <div style={{ padding: '10px 0' }}>
                        {
                            new Array(20).fill(0).map((img, ind) => (
                                <img key={'img' + ind} src={logo} style={{ width: '20px', height: 'auto' }} />
                            ))
                        }
                    </div>
                </>}
            />

        </>
    );
}

export default Pdf;
