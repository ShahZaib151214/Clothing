import React, { useState } from 'react';
import { dress_list } from '../../assets/Assets/Asset';
import './HomePage.css';
import Header from '../../Component/Header/Header';
import { useNavigate } from 'react-router-dom';

import ShowDress from './ShowDress';
import Offer from './Offer';
import Accessories from './Accessories';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentIndex + itemsToShow < dress_list.length) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };

  const handleCardClick = (dress) => {
    navigate(`/product-detail/${dress.id}`, { state: { dress } });
  };

  return (
    <>
      <Header />
      <div className="homepage-section">
        <div className="container">
          <h2 className="section-title">Best Selling</h2>
          <p className="section-description">
            Get in on the trend with our curated selection of best-selling items.
          </p>

          <div className="slider-container">
            <div className="slider-wrapper">
              <div
                className="slider-content"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
              >
                {dress_list.slice(currentIndex, currentIndex + itemsToShow).map((dress) => (
                  <div
                    key={dress.id}
                    className="slider-item"
                    onClick={() => handleCardClick(dress)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={dress.image} alt={dress.name} className="slider-item-image" />
                    <h3 className="slider-item-title">{dress.name}</h3>
                    <div style={{ display: 'flex', gap: '20px', width: '100%', marginLeft: '5vw' }}>
                      <p className="slider-item-price">${dress.price.toFixed(2)}</p> |
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p>4.5</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevSlide} className="slider-button left-button" disabled={currentIndex === 0}>
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="slider-button right-button"
              disabled={currentIndex + itemsToShow >= dress_list.length}
            >
              &gt;
            </button>
          </div>

          <div className="see-more">
            <button className="see-more-button">
              See more
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25 " fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ShowDress />
      <Offer />
      <Accessories />
    </>
  );
};

export default HomePage;
