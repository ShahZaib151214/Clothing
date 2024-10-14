import { useState } from 'react';
import { assets } from '../../assets/Assets/Asset';
import './showDress.css';

const ShowDress = () => {
    const [linstate , setlinkstate] = useState('sale')
    return (
        <>
            <main>
                <div className="heading">
                <h2 className="heading-title">Best Selling</h2>
                   <ul className="link-display">
                      <li className={linstate == 'sale'? 'active':''} onClick={()=>setlinkstate('sale')}>SALE</li>
                      <li className={linstate == 'hot'? 'active':''} onClick={()=>setlinkstate('hot')}>HOT</li>
                      <li className={linstate == 'new'? 'active':''} onClick={()=>setlinkstate('new')}>NEW ARIVAL</li>
                      <li className={linstate == 'accessories'? 'active':''} onClick={()=>setlinkstate('accessories')}>ACCESSORIES</li>
                   </ul>
                </div>



                <div className="card-container">
                    <div className="card">
                        <img src={assets.Img1} alt="Card Image" />
                        <h3>Summer Wind T-shirt</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$20.00</p>|
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img2} alt="Card Image" />
                        <h3>Tailored Jacket</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$30.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.8</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img3} alt="Card Image" />
                        <h3>Formal Classic Suit</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$50.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.6</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img4} alt="Card Image" />
                        <h3>White Solid Formal T-shirt</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$25.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img5} alt="Card Image" />
                        <h3>Tailored Jacket</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$30.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.7</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img6} alt="Card Image" />
                        <h3>Solid White Summer T-shirt</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$15.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.3</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img7} alt="Card Image" />
                        <h3>Classic Top</h3>
                       
                        <div className="card-footer"style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$22.00</p> |
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.6</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.Img8} alt="Card Image" />
                        <h3>Formal Jeans</h3>
                       
                        <div className="card-footer" style={{backgroundColor:'transparent'}}>
                            <p className="slider-item-price">$35.00</p>|
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p>4.9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ShowDress;
