import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
// import video from "../assets/video.mp4";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieData } = location.state || {};

  console.log(movieData);

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        <div className="movie-details">
          <h1>{movieData.name}</h1>
          {movieData.firstAirDate && (
            <p>First Air Date: {movieData.firstAirDate}</p>
          )}
          {movieData.genres && (
            <div>
              <h3>Genres</h3>
              <ul>
                {movieData.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          )}
          {movieData.image && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt={`${movieData.name} Poster`}
            />
          )}
          {movieData.overview && <p>{movieData.overview}</p>}
          {movieData.popularity && <p>Popularity: {movieData.popularity}</p>}
          {movieData.originalLanguage && (
            <p>Original Language: {movieData.originalLanguage}</p>
          )}
          {movieData.originCountry && (
            <p>Origin Country: {movieData.originCountry.join(", ")}</p>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  color: #c9d1d9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .player {
    width: 90vw;
    max-width: 1200px; // Limit the width for better layout on large screens
    margin: auto;
    padding: 2rem;
    background: rgba(13, 17, 23, 0.95);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);

    .back {
      position: absolute;
      top: 20px;
      left: 20px;
      svg {
        font-size: 2rem;
        color: #58a6ff; // Bright color for visibility
        cursor: pointer;
      }
    }

    .movie-details {
      text-align: left;
      padding: 20px;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      p,
      h3 {
        margin-top: 1rem;
      }

      img {
        width: 100%; // Full width to act as a banner
        max-height: 500px;
        object-fit: cover; // Ensures the image fits well
        border-radius: 10px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;

        li {
          background: #161b22;
          margin: 5px;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: bold;
        }
      }
    }
  }
`;
