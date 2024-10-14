import { assets } from '../../assets/Assets/Asset';
import './AboutUs.css'
const AboutUs =()=>{
    return(
          <>
          <body>
    <div class="container">
      
        <div class="section about-section">
            <div class="text-content">
                <h2>About Us</h2>
                <p>Welcome to Logo – your ultimate destination for cool and trendy fashion! At Logo, we are dedicated to providing the latest styles that resonate with the vibrant and dynamic spirit of today's youth. Our collection is carefully curated to ensure that every piece embodies the cutting-edge trends and timeless coolness that define your unique style.</p>
            </div>
            <img src={assets.Img1} alt="About Us Image" width="400px" height="400px"/>
        </div>

       
        <div class="section mission-section">
            <img src={assets.Img2} alt="Our Mission Image" height="400px" width="400px"/>
            <div class="text-content">
                <h2>Our Mission</h2>
                <p>Our mission is simple: to inspire and empower youngsters to express themselves through fashion. Whether you’re looking for the perfect outfit for a night out, a casual day at school, or anything in between, Logo has you covered. We believe in fashion as a form of self-expression, and our diverse range of clothing is designed to cater to every mood and moment.</p>
            </div>
        </div>

    
        <div class="section our-team-section">
            <h2>Our Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <img src={assets.team1} alt="Team Member"/>
                    <h4>John Doe</h4>
                    <p>CEO & Founder</p>
                </div>
                <div class="team-member">
                    <img src={assets.team2} alt="Team Member"/>
                    <h4>Jane Smith</h4>
                    <p>Lead Designer</p>
                </div>
                <div class="team-member">
                    <img src={assets.team1} alt="Team Member"/>
                    <h4>Chris Johnson</h4>
                    <p>Marketing Head</p>
                </div>
                <div class="team-member">
                    <img src={assets.team2} alt="Team Member"/>
                    <h4>Emma Williams</h4>
                    <p>Operations Manager</p>
                </div>
            </div>
        </div>

       
        <section class="description-section">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </section>

      
        <section class="subscribe-section">
            <h4>Stay in the loop</h4>
            <p>Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
            <form>
                <input type="email" placeholder="Enter email address"/>
                <button type="submit">Continue</button>
            </form>
        </section>
    </div>
</body>
          </>
    )
}
export default AboutUs;