import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css'; 
import { assets, dress_list } from '../../assets/Assets/Asset';

const ProductDetail = () => {
  const [activetab, setactivetab] = useState('detail');
  const [currentSlide, setCurrentSlide] = useState(0); // State for slider
  const { id } = useParams(); 
  const location = useLocation();
  
  const dress = dress_list.find((dress) => dress.id === parseInt(id));

  if (!dress) {
    return <div>Product not found</div>;
  }
  const similarProducts = Array(7).fill({
    id: 1,
    name: "Summer Wind T-shirt",
    price: 20.00,
    discountPrice: 30.00,
    rating: 4.5,
    image: assets.Img1
  });

  const totalSlides = Math.ceil(similarProducts.length / 4); 

  const slideLeft = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  return (
    <>
      <div className={styles.productDetailContainer}>
        <div className={styles.productImages}>
          <div className={styles.thumbnailImages}>
            {Array.from({ length: 4 }).map((_, index) => (
              <img key={index} src={dress.image} alt={dress.name} className={styles.thumbnail} />
            ))}
          </div>
          <div className={styles.mainImageContainer}>
            <img src={dress.image} alt={dress.name} className={styles.mainImage} />
          </div>
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{dress.name}</h1>
          <p className={styles.productBrand}>Brand Name</p>
          <div className={styles.productRating}>
            <span className={styles.ratingStars}>★★★★☆</span>
            <span className={styles.reviewCount}>(36 Reviews)</span>
          </div>
          <p className={styles.productPrice}>
            {dress.price} <span className={styles.discount}>30% off</span>
          </p>

          <div className={styles.sizeSelection}>
            <p className={styles.sectionHeading}>Select Size</p>
            <div className={styles.sizeOptions}>
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className={styles.sizeBtn}>{size}</button>
              ))}
            </div>
          </div>

          <div className={styles.colorSelection}>
            <p className={styles.sectionHeading}>Select Color</p>
            <div className={styles.colorOptions}>
              {['blue', 'red', 'grey', 'black'].map(color => (
                <div key={color} className={`${styles.colorOption} ${styles[color]}`}></div>
              ))}
            </div>
          </div>

          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${activetab === 'detail' ? styles.active : ''}`} onClick={() => setactivetab('detail')}>Product Details</button>
        <button className={`${styles.tab} ${activetab === 'specification' ? styles.active : ''}`} onClick={() => setactivetab('specification')}>Specification</button>
        <button className={`${styles.tab} ${activetab === 'rating' ? styles.active : ''}`} onClick={() => setactivetab('rating')}>Ratings & Reviews</button>
      </div>
      
      <hr />
      
      <div className={styles.productDescription}>
        
        <p className={styles.materialCare}><strong>Product Details</strong><br/> Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem</p>
        <p className={styles.materialCare}><strong>Size & Fit</strong><br/> The model (height 5'8") is wearing a size S</p>
        <p className={styles.materialCare}><strong>Material & Care</strong><br/> 100% cotton, Machine Wash.</p>
      </div>
      <h1>Similar Products</h1>
      <div className={styles.sliderWrapper}>
        <button 
          className={`${styles.sliderButton} ${styles.left}`} 
          onClick={slideLeft}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        
        <div className={styles.cardContainer} 
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {similarProducts.map((product, index) => (
            <div key={index} className={styles.card}>
              <img src={product.image} alt={product.name}/>
              <h3>{product.name}</h3>
              <div className={styles.cardFooter}>
                <p className={styles.sliderItemPrice}>${product.price.toFixed(2)}</p>
                <p className={styles.discountPrice}>${product.discountPrice.toFixed(2)}</p>
                <p className={styles.discount}>(30% off)</p>
                <div className={styles.rating}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <p>{product.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.sliderButton} ${styles.right}`} 
          onClick={slideRight}
          disabled={currentSlide >= totalSlides - 1}
        >
          →
        </button>
      </div>

      
    </>
  );
};

export default ProductDetail;
