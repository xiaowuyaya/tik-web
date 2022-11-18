import React, {useEffect, useState} from 'react'
import {IconGithub} from '@arco-design/web-react/icon'
import './nav.less'
import {useLocation, useNavigate} from "react-router-dom";

export default function Nav() {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const menuActive = (path: string) => {
    if (path === pathname) return 'nav-menu__active'
  }

  return (
    <div className='nav-container'>
      <div className="nav-content">
        <img className="nav-logo" src="/public/tik.png" alt="logo"/>
        <ul className="nav-menu">
          <li className={menuActive('/')}><a onClick={() => { navigate('/') }}>首页</a></li>
          <li className={menuActive('/release')}><a onClick={() => { navigate('/release') }}>更新记录</a></li>
          <li className={menuActive('/donate')}><a style={{color: '#EF4444'}} onClick={() => { navigate('/donate') }}>捐助</a></li>
          <li className={menuActive('/contact')}><a onClick={() => { navigate('/contact') }}>联系我</a></li>
          <li><a href="https://github.com/xiaowuyaya/tik" target="_blank" style={{color: 'hsla(0,0%,100%,0.9)'}}><IconGithub /></a></li>
        </ul>
      </div>
    </div>
  )
}
