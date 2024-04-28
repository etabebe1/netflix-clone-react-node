import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import video from "../assets/video.mp4";

export default function Details() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/gBHde1DVp5c?autoplay=1&loop=1&mute=1"
          title="BEST UPCOMING MOVIES 2023 (Trailers)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
