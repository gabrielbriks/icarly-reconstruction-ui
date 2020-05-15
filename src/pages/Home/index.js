import React,{useState} from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";

import './styles.css';
import logoImg from '../../assets/logo.png';
import membrosICarly from '../../assets/membros-icarly.png';

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
              <button className="iBlogs" >iBLOGS</button>
              <button className="iSnaps">iSNAPS</button>
              <button className="iSnaps">iNEWS</button>
              <button className="iStrivia">iTRIVIA</button>
              <button className="iStrivia">iVIDEO</button>
              <button className="iSnaps">iPLAY</button>
              <button className="iStrivia">iSONGS</button>
              <button className="iSnaps">iNEED HELP</button>
              <button className="iSnaps">SEND US STUFF</button>
            </div>
            

          </div>
         
        </section>
      
      </div>
    </div>
  );
}

