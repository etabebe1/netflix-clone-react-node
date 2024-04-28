import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import video from "../assets/video.mp4";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/HgaJW2I4Mbk?autoplay=1&loop=1&mute=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
