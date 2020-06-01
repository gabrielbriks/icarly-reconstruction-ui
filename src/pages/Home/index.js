import React from "react";
import publicIp from "public-ip";
import { GiMagnifyingGlass, GiMouse } from "react-icons/gi";
import { BsChatFill } from "react-icons/bs";
import {
  MdPhotoCamera,
  MdSettingsInputAntenna,
  MdVideocam,
  MdEmail,
} from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { FaPlayCircle, FaHeadphonesAlt, FaStar, FaHeart } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import ReactPlayer from "react-player";

import "./styles.css";
import logoImg from "../../assets/logo.png";
import membrosICarly from "../../assets/membros-icarly.png";
import playerImg from "../../assets/player.png";
import zipperImg from "../../assets/zipper.png";
import avatar from "../../assets/avatar.png";
import aboutIcarlyImage from "../../assets/about-icarly-chat.png";
import voteImg from "../../assets/vote.png";
import grupoIcarlyImg from "../../assets/grupo.png";
import logoNetflixImg from "../../assets/netflix-logo.png";
import logoNickImg from "../../assets/logo-nickelodeon.png";
import logoYoutubeImg from "../../assets/YouTube-Logo.png";

export default function Home() {
  let date = new Date();
  console.log(date);
  let likeIp;
  let dislikeIp;

  function handleSearch() {
    console.log("clikked");
  }

  function handleAlertSendThanks() {
    alert(
      `Fico mega feliz em saber que irá compartilhar esse trabalho! Basta copiar o link da URL e compartilhar 
      ${(<FaHeart color="#b9132c" />)}`
    );
  }

  async function handleLike() {
    alert("Seu like está sendo registrado! Agradeço a sua sinceridade!");
    likeIp = await publicIp.v4();

    console.log(likeIp);
  }

  async function handleDislike() {
    alert("Seu dislike está sendo registrado! Agradeço a sua sinceridade!");
    dislikeIp = await publicIp.v4();

    console.log(dislikeIp);
  }

  return (
    <div className="container">
      <img src={logoImg} className="imgLogo" alt="Logo iCarly" />

      <header className="imgsHeader">
        <a href="https://es.wikipedia.org/wiki/ICarly" target="_blank">
          <img
            src={aboutIcarlyImage}
            className="aboutIcarlyImage"
            alt="More info about iCarly"
          />
        </a>
        <div className="imgMembros">
          <img
            src={membrosICarly}
            className="imgMembros"
            alt="Membros iCarly"
          />
        </div>
      </header>

      <div className="content">
        <section>
          <div className="search">
            <p className="todayIs"> Make today the best day of your life! </p>
            <p className="phraseToDay">"LEMON TUBE"</p>

            <div>
              <h3>search our site</h3>
              <input type="text" />
              <button
                type="submit"
                onClick={handleSearch}
                className="btnSearch"
              >
                <GiMagnifyingGlass color={"#fff"} size={20} />
              </button>
            </div>

            <div className="bntHeader">
              <button className="iBlogs">
                iBLOGS <BsChatFill size={20} />
              </button>
              <button className="iSnaps">
                iSNAPS <MdPhotoCamera size={20} />{" "}
              </button>
              <button className="iNews">
                iNEWS <MdSettingsInputAntenna size={20} />{" "}
              </button>
              <button className="iStrivia">
                iSTRIVIA <GoLightBulb size={20} />{" "}
              </button>
              <button className="iVideo">
                iVIDEO <MdVideocam size={20} />{" "}
              </button>
              <button className="iPlay">
                iPLAY <FaPlayCircle size={20} />{" "}
              </button>
              <button className="iSongs">
                iSONGS <FaHeadphonesAlt size={20} />{" "}
              </button>
              <button className="iNeed">
                {" "}
                iNEED
                <IoMdHelp size={18} /> HELP{" "}
              </button>
              <button className="iSendStuff">
                {" "}
                SEND
                <GiMouse size={22} /> US STUFF{" "}
              </button>
            </div>
          </div>

          <button
            className="btnColorRed"
            onClick={() => {
              handleAlertSendThanks();
            }}
          >
            <MdEmail size={22} style={{ marginRight: "10px" }} /> send this
            video to a friend
          </button>
          <div className="section-player">
            <ReactPlayer
              width={470}
              height={350}
              url="https://www.youtube.com/watch?v=GaUOQ5uSoyg"
              controls={true}
              style={{ position: "absolute", margin: "18vh 4.8%" }}
            />
            <div className="player">
              <img
                src={playerImg}
                className="playerImg"
                alt="Structure background player"
              />
            </div>
            <div className="area-icarlyExtras">
              <p className="titleExtras">
                iCarly <i>Extras</i>
              </p>
              <div className="comments">
                <div className="comments-item">
                  <img src={avatar} className="avatar" />
                  <p>
                    I did this reconstruction of the iCarly website interface,
                    if you liked it vote below.
                  </p>
                  <i>
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                  </i>
                </div>

                <div className="comments-item">
                  <img src={avatar} className="avatar" />
                  <p>
                    Here are the ten best moments of the iCarly series. Video
                    built by the YouTube Mojo channel.
                  </p>
                  <i>
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                    <FaStar color="#ffd700" />
                  </i>
                </div>
              </div>
              <div className="icarlyExtras">
                <img src={zipperImg} className="imgZipper" />
              </div>
              <div className="btnsAreaExtrasDown">
                <button className="btnColorRed" id="btnSeeMoreVideos">
                  <a
                    href="https://es.wikipedia.org/wiki/ICarly"
                    target="_blank"
                  >
                    see more videos
                  </a>
                </button>

                <button className="btnColorRed " id="btnUploudVideos">
                  upload video
                </button>
              </div>
            </div>
          </div>
          <footer className="footer">
            <img
              src={grupoIcarlyImg}
              className="imgGrupoIcarly"
              alt="Grupo iCalry web show"
            />

            <div className="voteVideo">
              <img src={voteImg} className="voteImage" alt="Image vote video" />
              <p>You like this rebuilding?</p>
              <div className="likeOrDisLike">
                <i>
                  <AiTwotoneLike
                    id="like"
                    size={45}
                    color="#cc9c00"
                    style={{ border: 2, borderColor: "#000" }}
                    onClick={() => {
                      handleLike();
                    }}
                  />
                </i>
                <i>
                  <AiTwotoneDislike
                    id="disLike"
                    size={45}
                    color="#333"
                    onClick={() => {
                      handleDislike();
                    }}
                  />
                </i>
              </div>
            </div>

            <div className="watchIcarly">
              <p id="title">Watch iCarly</p>
              <div className="watchItems">
                <p>
                  <a
                    href="https://www.netflix.com/br/title/70136153"
                    target="_blank"
                  >
                    <img
                      src={logoNetflixImg}
                      id="logoNetflix"
                      alt="Watch in netflix"
                    />
                  </a>
                </p>
                <p>
                  <a href="http://www.mundonick.com.br/icarly/" target="_blank">
                    <img
                      src={logoNickImg}
                      id="logoNickelodeon"
                      alt="Watch in nickelodeon"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.youtube.com/watch?v=GPV_PUgPDf4&list=PL-UBAqb0hFIoc16VmGKuE-m4b9DhBeXcC"
                    target="_blank"
                  >
                    <img
                      src={logoYoutubeImg}
                      id="logoNickelodeon"
                      alt="Watch in nickelodeon"
                    />
                  </a>
                </p>
              </div>
            </div>
          </footer>
          <div id="withLove">
            <p>
              Made with <FaHeart color="#b9132c" /> by{" "}
              <a id="author" href="#">
                Gabriel Briks
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
