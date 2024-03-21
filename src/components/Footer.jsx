import fb_logo from '../assets/Images/social-img/facebook.svg'
import x_logo from '../assets/Images/social-img/twitter.svg'
import yt_logo from '../assets/Images/social-img/youtube.svg'
import insta_logo from '../assets/Images/social-img/instagram.svg'


const Footer = ()=>{
    return(
        <>
        <footer>
            <div className="--browse">
                <h3>Browse</h3>
                <a href="">Streaming Library</a>
                <a href="">Live TV</a>
                <a href="">Live News</a>
                <a href="">Live Sports</a>
                <a href="">TV Shows</a>
                <a href="">Movies</a>
                <a href="">Originals</a>
                <a href="">Networks</a>
                <a href="">Kids</a>
                <a href="">FX on Hulu</a>
                <a href="">Hulu, Disney+,and ESPN+</a>
                <a href="">Disney Bundle</a>
                <a href="">HBO Max</a>
                <a href="">Cinimax</a>
                <a href="">Showtime</a>
                <a href="">Starz</a>
            </div>
            <div className="--help">
                <h3>Help</h3>
                <a href="">Account & Billling</a>
                <a href="">Plans & Pricing</a>
                <a href="">Supported Devices</a>
                <a href="">Accessibility</a>
            </div>
            <div className="--about-us">
                <h3>About Us</h3>
                <a href="">Press</a>
                <a href="">Jobs</a>
                <a href="">Contact</a>
            </div>

      </footer>
      <hr />
      <div className="--social-logos">
        <img src={fb_logo} alt="facebook-logo" />
        <img src={x_logo} alt="twitter-logo" />
        <img src={yt_logo} alt="youtube-logo" />
        <img src={insta_logo} alt="instagram-logo" />
      </div>
      </>
            

    )

}

export default Footer;