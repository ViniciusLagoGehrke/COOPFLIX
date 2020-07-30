import React from 'react';
import styled from "styled-components";

const videoSrc = "https://www.youtube.com/embed/_w5n_hrObXc"

const FullPageVideo = styled("div")`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: var(--black);
  background-image: "../assets/img/NoSignal.png"

`

const TitleOver = styled.h1`
  color: var(--black);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index:1;
`;



function Pagina404() {
  return (
    <div>
      <FullPageVideo>
        <video src={videoSrc} type="video/mp4" autoPlay loop></video>
      </FullPageVideo>

      <TitleOver>PÁGINA NÃO ENCONTRADA</TitleOver>
    </div>
  )
}

export default Pagina404;