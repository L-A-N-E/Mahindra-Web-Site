import React from "react";
import styled from "styled-components";
import Colors from "../constant/Colors";


const Medias = () => {
  return (
    <MediaStyle>
      <div className="card">

        {/* Instagram */}
        <a href="https://www.instagram.com/mahindraracing" className="socialContainer containerOne">
          <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
            {" "}
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/MahindraRacing" className="socialContainer containerTwo">
          <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
            <path d="M15.117 0H.883C.396 0 0 .396 0 .883v14.235C0 15.604.396 16  .883 16h7.66v-6.8H7.05v-2.9h1.494V6.868c0-1.48.775-3.016 3.033-3.016.877 0 1.796.155 1.796.155v1.968h-1.005c-.99 0-1.31.615-1.31 1.248v1.502h2.63l-.419 2.9h-2.211V16h4.296c.487 0 .883-.396.883-.883V.883C16 .396 15.604 0 15.117 0z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/mahindraracing/" className="socialContainer containerThree">
          <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>

        {/* Youtube */}
        <a href="https://www.youtube.com/mahindraracing" className="socialContainer containerFour">
          <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
            <path d="M8.051 0C3.6 0 0 3.56 0 8.004c0 4.444 3.6 8.004 8.051 8.004 4.45 0 8.051-3.56 8.051-8.004C16.102 3.56 12.5 0 8.051 0zm3.04 8.21l-4.22 2.54V5.67l4.22 2.54 1.235.76a.226.226 0 0 1 0 .404l-1.235.76z" />
          </svg>
        </a>
      </div>
    </MediaStyle>
  );
};

const MediaStyle = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
    border-radius:10px;
    border: 1px solid ${Colors.red_1};
  }
  /* Instagram */
  .containerOne:hover {
    background-color: ${Colors.red_1};
    transition-duration: .3s;
    color: ${Colors.red_1};
    border: none;
  }

  /* Facebook */
  .containerTwo:hover {
    background-color: ${Colors.red_1};
    transition-duration: .3s;
    color: ${Colors.red_1};
    border: none;
  }

  /* LinkedIn */
  .containerThree:hover {
    background-color: ${Colors.red_1};
    transition-duration: .3s;
    color: ${Colors.red_1};
    border: none;
  }

  /* Youtube */
  .containerFour:hover {
    background-color: ${Colors.red_1};
    transition-duration: .3s;
    color: ${Colors.red_1};
    border: none;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: ${Colors.white};
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.4s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
}


`;

export default Medias;
