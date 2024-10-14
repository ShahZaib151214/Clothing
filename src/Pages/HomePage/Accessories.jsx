import { assets } from '../../assets/Assets/Asset';
import './Accessories.css';

const Accessories = () => {
  return (
    <>
   
      <section className="accessories-section">
        <h1>Cool & Trendy Clothes For You</h1>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <div className="accessories-container">
          <div className="accessory-item">
            <img src={assets.Img7} alt="Accessory 1" />
            <h3>Accessories</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.</p>
          </div>
          <div className="accessory-item">
            <img src={assets.Img6} alt="Accessory 2" />
            <h3>Accessories</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nisi elit potenti diam quis condimentum sed purus suspendisse.</p>
          </div>
          <div className="accessory-item">
            <img src={assets.Img1} alt="Accessory 3" />
            <h3>Accessories</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum dolor id cras in eu tempor euismod ac.</p>
          </div>
        </div>
      </section>

 
      <section className="feedback-section">
        <h2>Clients Feedback</h2>
        <div className="feedback-container">
          <div className="feedback-item">
            <blockquote>
              <p>
                The customer experience was exceptional from start to finish. The website is user-friendly. The
                checkout process was smooth and the delivery arrived perfectly. I'm beyond satisfied!
              </p>
            </blockquote>
            <cite>- Maria Shabbir</cite>
          </div>
          <div className="feedback-item highlighted">
            <blockquote>
              <p>
                I absolutely love the quality and style of the clothing I purchased from this website. Customer
                service was outstanding and I received my order quickly. Highly recommended!
              </p>
            </blockquote>
            <cite>- Beenish Mumtaz</cite>
          </div>
          <div className="feedback-item">
            <blockquote>
              <p>
                I had a great experience shopping on this website. The clothes I bought are fashionable and
                comfortable. Highly satisfied!
              </p>
            </blockquote>
            <cite>- Ayra Khan</cite>
          </div>
        </div>

        <div className="pagination">
          <span className="prev">&lt;</span>
          <span className="next">&gt;</span>
        </div>
      </section>
    </>
  );
};

export default Accessories;
