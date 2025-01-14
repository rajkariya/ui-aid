import React from 'react';
import styled from 'styled-components';
import HangingImage from '../Assets/section1.png';
import Circle1 from '../Assets/Purple_Circle.png';
import Circle2 from '../Assets/Purple_Circle_2.png';

const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #fdfbff, #f1f0f7);
  font-family: 'Poppins', sans-serif;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 1rem auto;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;

    button {
      background-color: #5e60ce;
      color: #fff;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #4a4ba8;
      }
    }

    .secondary {
      background: transparent;
      color: #5e60ce;
      border: 2px solid #5e60ce;

      &:hover {
        background: #5e60ce;
        color: #fff;
      }
    }
  }

  .image-container {
    margin-top: 3rem;
    position: relative;
    max-width: 1000px;
    margin: 3rem auto 0;

    img {
      width: 100%;
      height: auto;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    .circle1,
    .circle2 {
      position: absolute;
      z-index: -1;
    }

    .circle1 {
      top: -50px;
      left: 50px;
      width: 150px;
    }

    .circle2 {
      bottom: -50px;
      right: 50px;
      width: 120px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .buttons {
      flex-direction: column;

      button {
        width: 100%;
      }
    }

    .circle1 {
      top: -30px;
      left: 20px;
      width: 100px;
    }

    .circle2 {
      bottom: -30px;
      right: 20px;
      width: 80px;
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <h1>Effortlessly Create High-Quality Articles with Our AI Article Generator</h1>
      <p>
        AI has the potential to revolutionize the way we live and work, from improving healthcare and
        transportation to enhancing the way.
      </p>
      <div className="buttons">
        <button>Get Started</button>
        <button className="secondary">Explore</button>
      </div>
      <div className="image-container">
        <img src={HangingImage} alt="Hanging Example" />
        <img src={Circle1} alt="Circle 1" className="circle1" />
        <img src={Circle2} alt="Circle 2" className="circle2" />
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
