import { assets } from '../../assets/Assets/Asset';
import styles from './ProductPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductPage = () => {
    const navigate = useNavigate();
    const [minPrice, setMinPrice] = useState(120);
    const [maxPrice, setMaxPrice] = useState(300);

    const products = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        price: '$120.23',
        img: assets.Img1,
        orders: '22 Orders',
    }));

    const handleProductClick = (product) => {
        navigate(`/product-detail/${product.id}`, { state: { dress: product } });
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <aside className={styles.filters}>
                    <div className={styles.filterSection}>
                        <h4>Prices</h4>
                        <div className={styles.priceRange}>
                            <label>Range</label>
                            <span>${minPrice} - ${maxPrice}</span>
                            <input
                                type="range"
                                min="120"
                                max="300"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
                                className={styles.slider}
                                id="minPrice"
                            />
                            <input
                                type="range"
                                min="120"
                                max="300"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
                                className={styles.slider}
                                id="maxPrice"
                            />
                        </div>
                    </div>

                    <div className={styles.filterSection}>
                        <h4>Brands</h4>
                        <ul>
                            <li><input type="checkbox" id="brand1" /><label htmlFor="brand1"> Victoria's Secret</label></li>
                            <li><input type="checkbox" id="brand2" /><label htmlFor="brand2"> Dior</label></li>
                            <li><input type="checkbox" id="brand3" /><label htmlFor="brand3"> Gucci</label></li>
                            <li><input type="checkbox" id="brand4" /><label htmlFor="brand4"> Fendi</label></li>
                            <li className={styles.moreBrands}>+ 234 more</li>
                        </ul>
                    </div>

                    <div className={styles.filterSection}>
                        <h4>Categories</h4>
                        <ul>
                            <li><input type="checkbox" id="category1" /><label htmlFor="category1"> Dresses</label></li>
                            <li><input type="checkbox" id="category2" /><label htmlFor="category2"> Tops</label></li>
                            <li><input type="checkbox" id="category3" /><label htmlFor="category3"> Lingerie & Lounge Wear</label></li>
                            <li><input type="checkbox" id="category4" /><label htmlFor="category4"> Blouse</label></li>
                            <li className={styles.moreBrands}>+ 4 more</li>
                        </ul>
                    </div>

                    <div className={styles.filterSection}>
                        <h4>Size</h4>
                        <ul>
                            <li><input type="checkbox" id="size1" /><label htmlFor="size1"> Medium</label></li>
                            <li><input type="checkbox" id="size2" /><label htmlFor="size2"> Large</label></li>
                            <li><input type="checkbox" id="size3" /><label htmlFor="size3"> Plus Size</label></li>
                        </ul>
                    </div>
                </aside>

                <main className={styles.productGrid}>
                    <div className={styles.productHeader}>
                        <h2>Showing 1-20 of 1000 results</h2>
                        <select className={styles.sortDropdown}>
                            <option value="newest">Sort by: New Arrivals</option>
                            <option value="price">Sort by: Price</option>
                        </select>
                    </div>

                    <div className={styles.productList}>
                        {products.map((product) => (
                            <div
                                className={styles.productItem}
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                            >
                                <div className={styles.imageContainer}>
                                    <img src={product.img} alt={product.name} />
                                    <div className={styles.wishlistIcon}>❤</div>
                                </div>
                                <h3>{product.name}</h3>
                                <p className={styles.price}>
                                    {product.price} <span className={styles.originalPrice}>{product.price}</span>
                                </p>
                                <p className={styles.orders}>{product.orders}</p>
                                <div className={styles.badge}>New Arrivals</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">Next</a>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductPage;
