import React from 'react';
import { GiMagnifyingGlass, GiMouse } from "react-icons/gi";
import { BsChatFill } from "react-icons/bs";
import { MdPhotoCamera, MdSettingsInputAntenna, MdVideocam, MdEmail } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { FaPlayCircle, FaHeadphonesAlt, FaStar } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import ReactPlayer from "react-player";

import './styles.css';
import logoImg from '../../assets/logo.png';
import membrosICarly from '../../assets/membros-icarly.png';
import playerImg from '../../assets/player.png';
import zipperImg from '../../assets/zipper.png';
import avatar from '../../assets/avatar.png';
import aboutIcarlyImage from '../../assets/about-icarly-chat.png';
import carImg from '../../assets/car.png';
import voteImg from '../../assets/vote.png';

export default function Home(){
  let date = new Date()
  console.log(date)
  function handleSearch(){
    console.log('clikked')
  }
  return (

    <div className="container">
       {/* <div className="imgLogo"> */}
          <img src={logoImg} className="imgLogo" alt="Logo iCarly"/>
        {/* </div> */}
      <header className="imgsHeader">
      {/* <div className="test"></div> */}
        <img src={aboutIcarlyImage} className="aboutIcarlyImage" alt="More info about iCarly"/>
        <div className="imgMembros">
          <img src={membrosICarly} className="imgMembros" alt="Membros iCarly"/>
        </div>
      </header>
          
      <div className="content">   
        <section>
          <div className="search">
            <p className="todayIs">Today is </p>
            <p className="phraseToDay">"LEMON TUBE"</p>           

            <div>
              <h3>search our site</h3>
              <input type="text"/>
              <button type="submit" onClick={handleSearch} className="btnSearch">
                <GiMagnifyingGlass color={"#fff"} size={20}/>
              </button>
            </div>
            
            <div className="bntHeader">
              <button className="iBlogs" >iBLOGS <BsChatFill size={20}/></button>
              <button className="iSnaps">iSNAPS <MdPhotoCamera size={20}/> </button>
              <button className="iNews">iNEWS <MdSettingsInputAntenna size={20}/> </button>
              <button className="iStrivia">iSTRIVIA <GoLightBulb size={20}/> </button>
              <button className="iVideo">iVIDEO <MdVideocam size={20} /> </button>
              <button className="iPlay">iPLAY <FaPlayCircle size={20}/> </button>
              <button className="iSongs">iSONGS <FaHeadphonesAlt size={20} /> </button>
              <button className="iNeed"> iNEED<IoMdHelp size={18} /> HELP </button>
              <button className="iSendStuff"> SEND<GiMouse size={22}/>    US STUFF </button>
            </div>
            

          </div>
         
          <button className="btnColorRed">
            <MdEmail size={22} style={{marginRight: '10px'}}/>   send this video to a friend
          </button>
          <div className="section-player">

          
            <ReactPlayer 
              width={470}
              height={350}
              url="https://www.youtube.com/watch?v=GaUOQ5uSoyg" 
              controls={true}
              style={{position: "absolute", margin: '18vh 4.8%'}}
            />
            <div className="player">
              <img 
                src={playerImg}
                className="playerImg" 
                alt="Structure background player"
              />
              
              
            </div>
            <div className="area-icarlyExtras">
              <p className="titleExtras" >iCarly <i>Extras</i></p>
              <div className="comments">
                  <div className="comments-item">
                    <img src={avatar} className="avatar"/> 
                    <p>
                      Here are the ten best moments of the iCarly series. Video
                      built by the YouTube Mojo channel.  
                    </p>
                    <i><FaStar color="#ffd700"/> 
                      <FaStar color="#ffd700"/>
                      <FaStar color="#ffd700"/> 
                      <FaStar color="#ffd700"/>
                      <FaStar color="#ffd700"/>
                    </i>
                  </div>

                  <div className="comments-item">
                    <img src={avatar} className="avatar"/> 
                    <p>
                      Here are the ten best moments of the iCarly series. Video
                      built by the YouTube Mojo channel.  
                    </p>
                      <i><FaStar color="#ffd700"/> 
                      <FaStar color="#ffd700"/>
                      <FaStar color="#ffd700"/> 
                      <FaStar color="#ffd700"/>
                      <FaStar color="#ffd700"/>
                    </i>
                  </div>


                  
                </div>
              <div className="icarlyExtras">
                <img src={zipperImg} className="imgZipper" />
                
                
              </div>
              <div className="btnsAreaExtrasDown">
                <button className="btnColorRed" id="btnSeeMoreVideos">
                  see more videos
                </button>

                <button className="btnColorRed " id="btnUploudVideos">
                  upload video
                </button>
              </div>
             
            </div>
          </div>
          <footer className="footer">
            
            {/* <img src={carImg} className="carImageFooter" alt="" /> */}
            <div className="voteVideo">
              <img src={voteImg} className="voteImage" alt="Image vote video"/>
              <p>Like this video?</p>
              <div className="likeOrDisLike">
                <i><AiTwotoneLike id="like" size={45} color="#cc9c00" style={{border: 2, borderColor: '#000'}}/></i>
                <i>< AiTwotoneDislike id="disLike" size={45} color="#333"/></i>
                
                
              </div>
            </div>

        </footer>
        </section>
       
       
      </div>
    </div>
  );
}

