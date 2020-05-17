import React,{useState} from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsChatFill } from "react-icons/bs";
import { MdPhotoCamera, MdSettingsInputAntenna, MdVideocam, MdMouse, MdEmail } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { FaPlayCircle, FaHeadphonesAlt } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { GiMouse } from "react-icons/gi";
import ReactPlayer from "react-player";

import './styles.css';
import logoImg from '../../assets/logo.png';
import membrosICarly from '../../assets/membros-icarly.png';
import player from '../../assets/player.png';


export default function Home(){
  let date = new Date
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
      <div className="test"></div>
        
        <div className="imgMembros">
          <img src={membrosICarly} /*className="imgMembros"*/ alt="Membros iCarly"/>
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
              <button className="iSendStuff">SEND<GiMouse size={22}/> US STUFF </button>
            </div>
            

          </div>
         
         <div className="section-player">

          <button className="btnSendThisVideo">
            <MdEmail size={22} style={{marginTop: '0px'}}/>   send this video to a friend
          </button>
          <ReactPlayer 
            url="https://www.youtube.com/watch?v=GaUOQ5uSoyg" 
            controls={true}
            style={{position: "absolute", width: '500px', height: '500px', margin: '10vh 5.8%'}}
          />
          <div className="player">
            <img 
              src={player}
              className="playerImg" 
              alt="Image player"
              style={{width: '700px'}}
            />
             
              
           </div>
           
         </div>
         
        </section>
      
      </div>
    </div>
  );
}

