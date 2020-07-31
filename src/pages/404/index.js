import React from 'react';
import styled from "styled-components";

const videoSrc = "https://www.youtube.com/embed/_w5n_hrObXc"

const FullWrap = styled("div")`
  height:100vh;
  display: flex;
  align-items:center;
  justify-content: center;
`

const VideoWrapper = styled("div")`

`

/*
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/img/NoSignal.png");
  background-color: var(--black);

  type="video/mp4" autoPlay="true" loop="true"

  min-width:100%;
  min-height:100%;
*/

const VideoFullScreen = styled("video")`

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
    <FullWrap>
      <VideoWrapper>
        <VideoFullScreen src={videoSrc} SameSite="Strict" type="video/mp4" autoPlay={true} loop={true} ></VideoFullScreen>
      </VideoWrapper>

      <TitleOver>PÁGINA NÃO ENCONTRADA</TitleOver>
    </FullWrap>
  )
}

export default Pagina404;