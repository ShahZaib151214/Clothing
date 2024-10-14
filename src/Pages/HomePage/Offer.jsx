import { assets } from '../../assets/Assets/Asset';
import './Offer.css';

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer-left">
          <img src={assets.offer} alt="Exclusive Offer" />
        </div>

        <div className="offer-right">
          <div className="offer-heading">
            <h1>Exclusive Offer</h1>
          </div>

          <div className="offer-text">
            <p>
              Unlock the unlimited style upgrade with our exclusive offer.
              Enjoy savings of up to 40% off on your latest New Arrivals.
            </p>
          </div>

          <div className="countdown">
            <div className="time-box">
              <span id="days">05</span>
              <p>Days</p>
            </div>
            <div className="time-box">
              <span id="hours">17</span>
              <p>Hours</p>
            </div>
            <div className="time-box">
              <span id="minutes">20</span>
              <p>Min</p>
            </div>
          </div>

          <div className="offerbtn">
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
