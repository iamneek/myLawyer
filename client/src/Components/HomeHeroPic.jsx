import React, { useState } from 'react'
import '../Styles/HeroPic.scss'
import { SiQuicktime } from "react-icons/si";
import VideoLoc from '../assets/demoothers.mp4'
import { RiPlayFill } from "react-icons/ri";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import { IoIosPause } from "react-icons/io";
import { useRef } from 'react';
import { useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const HomeHeroPic = () => {
  const [video_play, setVideo_play] = useState(false)
  const [videoLengthMinute, setVideoMinutes] = useState(0)
  const [currentVideoLengthMinute, setCurrentVideoMinutes] = useState(0)
  const [videoLengthSeconds, setVideoSeconds] = useState(0)
  const [currentVideoLengthSeconds, setCurrentVideoSeconds] = useState(0)
  const vid_ref = useRef(null)


  
  const getVideoDuration = () =>{
    const video = vid_ref.current;
    const mins = Math.floor(video.duration / 60)
    const secs = Math.floor(video.duration - (mins * 60))
    setVideoMinutes(mins < 10 ? `0${mins}`: mins)
    setVideoSeconds(secs < 10 ? `0${secs}`: secs)
  }
  const getCurrentPlayDuration = () =>{
    const video = vid_ref.current;
    const mins = Math.floor(video.currentTime / 60)
    const secs = Math.floor(video.currentTime - (mins * 60))
    video.ended ? setVideo_play(false) : null
    setCurrentVideoMinutes(mins < 10 ? `0${mins}`: mins)
    setCurrentVideoSeconds(secs < 10 ? `0${secs}`: secs)
  }
  
  const Skip = (duration) =>{
    const video = vid_ref.current;
    video.currentTime += duration;
    getCurrentPlayDuration();
  }
  
  const togglePlay = (e) =>{
    e.preventDefault();
    const video = vid_ref.current;
    video.paused ?  video.play() : video.pause()
    video.paused ?  setVideo_play(false) : setVideo_play(true)

  }

  const handleTimelineClick = (e) => {
    const timeline = e.currentTarget;
    // console.log('Current Target : ', e.currentTarget)
    const clickPosition = e.clientX - timeline.getBoundingClientRect().left;
    // console.log('Client X : ', e.clientX)
    // console.log('Bounding Client Rect : ', timeline.getBoundingClientRect().left)
    const percentageClicked = (clickPosition / timeline.offsetWidth) * 100;
    // console.log('Offset Width : ', timeline.offsetWidth)
    const video = vid_ref.current;
    if (video) {
      // console.log(video.duration)
      const newTime = (percentageClicked / 100) * video.duration;
      video.currentTime = newTime;
    }
  };

  
  useHotkeys(' ', togglePlay)
  useHotkeys('arrowleft',()=> Skip(-5))
  useHotkeys('arrowright',()=> Skip(5))

  return (
    <div className='hero_pic'>
      <div className="menubar_hero_pic">
        <div className="hero_mac_btns">
        <div className="close"><div className="close_inner"></div></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
        </div>
        <div className="hero_mac_title">
          <SiQuicktime size={18}/> <span>myLawyer Demo.mov</span>
        </div>
      </div>
        <div className="video_container_hero">
          <div className="video_controls_hero">
            <div className="video_main_control_hero">
              <div className="play_pause_next_hero">
              <AiFillBackward size={45} color='#fdefe9' className='video_backward_hero' onClick={()=>Skip(-5)}/>
              {video_play ? <IoIosPause size={55} color='#fdefe9' className='play_pause_hero' 
              onClick={(e)=>{
                setVideo_play(!video_play)
                togglePlay(e)
                }}
                /> : 
                <RiPlayFill size={55} color='#fdefe9' className='play_pause_hero' 
                onClick={(e)=>{
                  setVideo_play(!video_play)
                  togglePlay(e)
                }
              }
                />}
              <AiFillForward size={45}  color='#fdefe9' className='video_forward_hero' onClick={()=>Skip(5)}/>
              </div>
            </div>
              <div className="timing_and_duration">
              <span className="time_played">{currentVideoLengthSeconds > 0 ? currentVideoLengthMinute:'00'}:{currentVideoLengthSeconds > 0 ? currentVideoLengthSeconds: '00'}</span>
              <div className="timeline_duration_video_hero" onClick={handleTimelineClick}>
              <div className="timeline_indicator_video_hero" style={{
                  width: vid_ref.current
                    ? `${(vid_ref.current.currentTime / vid_ref.current.duration) * 100}%`
                    : '0%',
                }}></div>
              </div>
              <span className="time_total">{videoLengthMinute}:{videoLengthSeconds}</span>
              </div>
          </div>
          <video src={VideoLoc}  ref={vid_ref} onLoadedMetadata={getVideoDuration} onTimeUpdate={getCurrentPlayDuration}></video>
        </div>
    </div>
  )
} 

export default HomeHeroPic