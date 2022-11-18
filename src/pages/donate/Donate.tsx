import React from 'react'
import './donate.less'

export default function Donate() {
  return (
    <div className="donate-container">
      <div className="content">
        <div className="donate__title">个人免费项目，维护不易</div>
        <div className="donate__desc">如果你喜欢这个项目，不妨赞助一下开发者喝杯咖啡。或是提供技术上的支持，本项目所含内容全部开源。</div>
        <div className="qrcode">
          <div className="qrcode-box">
            <img src="http://qiniu.eiko.ren/serendipity/web/wechat-qrcode.png"/>
            <div>微信</div>
          </div>
          <div className="qrcode-box">
            <img src="http://qiniu.eiko.ren/serendipity/web/ali-qrcode.png"/>
            <div>支付宝</div>
          </div>
        </div>

        <div className="donate__desc" style={{marginTop: '1rem'}} >项目包括</div>
        <div className="donate__desc " >
          <div className="intro">桌面应用：tik</div>
          <div className="intro">技术栈： vue3, nodejs, electron, golang, 易语言</div>
          <div className="intro">仓库地址：https://github.com/xiaowuyaya/tik</div>
        </div>
        <div className="donate__desc ">
          <div className="intro">官网：tik-web</div>
          <div className="intro">技术栈： react</div>
          <div className="intro">仓库地址：https://github.com/xiaowuyaya/tik-web</div>
        </div>
        <div className="donate__desc ">
          <div className="intro">服务端：tik-server</div>
          <div className="intro">技术栈： nodejs, nest.js, mysql, redis, socket.io</div>
          <div className="intro">仓库地址：https://github.com/xiaowuyaya/tik-server</div>
        </div>
        <div className="donate__desc ">
          <div className="intro">微信小程序：tik-mini-applet</div>
          <div className="intro">技术栈： nodejs, vue3, uni-app</div>
          <div className="intro">仓库地址：https://github.com/xiaowuyaya/tik-mini-applet</div>
        </div>
      </div>
    </div>
  )
}
