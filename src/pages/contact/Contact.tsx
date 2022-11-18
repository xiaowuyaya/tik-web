import React from 'react'
import './contact.less'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="content">
        <img src="https://qiniu.eiko.ren/serendipity/web/IMG_20220513_192317.jpg" alt="IMG_20220513_192317"/>
        <div className="article">
          <p>XiaoWuYaYa @ 福州，Java后端开发。</p>
          <p>
            现就职于
            <a
              href="http://www.newland.cn
"
              target="_blank"
            >福建新大陆通信科技股份有限公司</a
            >
          </p>
          <h3>开发</h3>
          <p>如果你有开发相关的需求欢迎与我联系。</p>
          <p>承接：小程序，桌面应用，Android App，网站，CMS后台系统等。</p>
          <h3>技术栈</h3>
          <p>前端：HTML, JavaScript, Css, TypeScript, Vue, React</p>
          <p>后端：Java, Node.js, goland</p>
          <p>DB：MySQL, Oracle, MongoDB, Redis</p>
          <p>其他：electron, uni-app</p>
          <h3>如何联系到我</h3>
          <ul>
            <li>
              微信：ek1_life
            </li>
            <li>
              邮件：<a href="mailto:liaolingwei605@163.com"
            >liaolingwei605@163.com</a
            >
            </li>
            <li>QQ：282143356</li>
            <li>
              BiliBili：<a
              href="https://space.bilibili.com/30368302"
              target="_blank"
            >陈宸臣z</a
            >
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
