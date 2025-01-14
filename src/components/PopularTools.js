import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background: linear-gradient(145deg, #fdf5ff, #e6f3ff);
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666666;
    margin-bottom: 1rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
    gap: 2rem;
    justify-items: center;
    width: 100%;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablets */
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* 1 card per row on mobile */
    }
  }

  .card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem .5rem;
    text-align: center;
    width: 100%;
    max-width: 450px; /* Maximum width for each card */
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-10px);
    }

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 2rem;
      font-weight: bold;
    }

    h3 {
      font-size: 1.5rem;
      color: #333333;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      color: #666666;
    }
  }

  .icon-green {
    background: #d8feea;
  }

  .icon-pink {
    background: #fde8f0;
  }

  .icon-purple {
    background: #edebff;
  }

  .icon-yellow {
    background: #fff9db;
  }

  .icon-blue {
    background: #eaf7ff;
  }
`;



const PopularTools = () => {
  return (
    <SectionContainer>
      <h2>Most Popular Tools</h2>
      <p>These are the most popular tools and a good place to start.</p>
        <p> Give them a try!</p>
      
      <div className="card-grid">
        <div className="card">
          <div className="icon icon-green">
            <span role="img" aria-label="icon">📝</span>
          </div>
          <h3>Article Generator</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
        <div className="card">
          <div className="icon icon-pink">
            <span role="img" aria-label="icon">📄</span>
          </div>
          <h3>Blog Post Writer</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
        <div className="card">
          <div className="icon icon-purple">
            <span role="img" aria-label="icon">✏️</span>
          </div>
          <h3>Content Rewriter</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
        <div className="card">
          <div className="icon icon-yellow">
            <span role="img" aria-label="icon">🖼️</span>
          </div>
          <h3>Image Generator</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
        <div className="card">
          <div className="icon icon-pink">
            <span role="img" aria-label="icon">🛍️</span>
          </div>
          <h3>Product Descriptions</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
        <div className="card">
          <div className="icon icon-blue">
            <span role="img" aria-label="icon">📱</span>
          </div>
          <h3>Social Media Post</h3>
          <p>Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PopularTools;
