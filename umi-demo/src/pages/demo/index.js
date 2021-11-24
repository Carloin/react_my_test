import React from 'react';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined, ScissorOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import img from '../../image/test.jpg'
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
                // saveAs(defaultUrl)
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
            </Space>
           
        </div>
         
        <div id="node" className="node-content" style={{ textAlign: 'center',backgroundColor:'#fff'  }}>
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
            <ScissorOutlined />
            <img src={img} alt="" style={{ width: '200px', height: '200px'}} />
        </div>
        <div id="export-img" className="my-image"></div>
    </div>)
}

export default DomToImg;
