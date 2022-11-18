import React, {useEffect, useState} from 'react'
import {Carousel} from '@arco-design/web-react';
import './home.less'
import {getLastVersionCode, getLastVersionUrl} from "@/api/web";
import { IconDoubleDown } from '@arco-design/web-react/icon';

const intros = [
  {
    title: '📋对局面板',
    desc: '快速预览所有玩家的近期(20把)对局的kda，算法评分，排名称号显示，单双段位，常用英雄以及战绩情况（可通过快捷键发送内容）',
    img: new URL('../../assets/app_home.png', import.meta.url).href,
  },
  {
    title: '📝黑名单',
    desc: '遇人不淑？拉黑他，下回在排到黑名单成员时将在聊天框中提醒你!',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    title: '🛠️OPGG符文推荐',
    desc: '快速查询OPGG数据，在选人阶段自动推出该英雄的统计数据以及符文推荐，可一键导入。',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    title: '🔍战绩查询',
    desc: '快速预览所有玩家的近期(20把)对局的kda，算法评分，排名称号显示，单双段位，常用英雄以及战绩情况（可通过快捷键发送内容）',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    title: '⌚️手动技能计时',
    desc: '顾名思义，当游戏开始时可通过快捷键呼出窗口，手动点击英雄技能可自动发送英雄的技能剩余时间，并在冷却将结束时再次提醒',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    title: '🔨其他常用功能',
    desc: '自动接收对局，匹配秒选，排位自动禁选，段位伪造，状态更改，强行观战（无需好友），生涯背景修改，5V5训练模式',
    img: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  },
]

const qqGroup = 'https://qm.qq.com/cgi-bin/qm/qr?k=9HNfbMmM3ISfaX2YBjyJrD5r_Xgt8Bio&jump_from=webapi'

export default function Home() {

  const [releaseInfo, setReleaseInfo] = useState({version: '0.0.0', url: '#'});

  const initData = async () => {
    const {data: version} = await getLastVersionCode()
    const {data: url} = await getLastVersionUrl()
    setReleaseInfo({version, url})
    console.log({version, url})
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content__title">Tik<span className='home-content__version'>v{releaseInfo.version}</span></div>
        <div className="home-content__desc">
          这可能是你用过最简单舒心的英雄联盟对局助手，提供敌我军历史战绩分析以及其他附加功能。
        </div>
        <div className="home-content__btns">
          <a href={releaseInfo.url} target="_blank" className="btn btn__primary">立即下载</a>
          <a className="btn">视频介绍</a>
          <a href={qqGroup} target="_blank" className="btn">加群交流</a>
        </div>
        <div className="home-content__more" onClick={() => {
          window.scrollTo(0, document.documentElement.clientHeight)
        }}>下滑查看功能介绍
          <IconDoubleDown style={{marginLeft: '5px'}}/>
        </div>
      </div>
      <Carousel
        className='carousel-content'
        // autoPlay={true}
        indicatorType="slider"
        indicatorPosition="outer"
      >
        {intros.map((intro, index) => (
          <div className="intro-box" key={index}>
            <img src={intro.img}/>
            <div className="intro-text">
              <h2>{intro.title}</h2>
              <div className="inro-desc">{intro.desc}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
