import React from 'react'
import '../Styles/HeroPic.scss'
import { SiQuicktime } from "react-icons/si";
import VideoLoc from '../assets/demoothers.mp4'
const HomeHeroPic = () => {
  return (
    <div className='hero_pic'>
      <div className="menubar_hero_pic">
        <div className="hero_mac_btns">
        <div className="close"><div className="close_inner"></div></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
        </div>
        <div className="hero_mac_title">
          <SiQuicktime size={18}/> <span>My Lawyer Demo</span>
        </div>
      </div>
        <div className="video_container">
          <div className="video_controls"></div>
          <video src={VideoLoc}></video>
        </div>
    </div>
  )
} 

export default HomeHeroPic