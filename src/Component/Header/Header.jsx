import { assets } from '../../assets/Assets/Asset';
import './Header.css'
const Header=()=>{
    return(<>

         <div className="header">
            <div className="header_left">
                <div className="header_left_heading">
                    <h1>Uncover and 
                          cultivate your 
                        distinctive style</h1>


                </div>
                <div className="header_left_text">
                     <p>
                        Lorem ipsum dolor sit amet consectetur. 
                            Faucibus odio gravida amet tellus 
                          adipiscing donec adipiscing dignissim
                        </p>

                </div>
                <div className="header_left_btn">
                    <button>Explore Now</button>

                </div>

            </div>
            <div className="header_right">
                <img src={assets.Img2} alt=""/>

            </div>

         </div>
    </>)
}
export default Header;
