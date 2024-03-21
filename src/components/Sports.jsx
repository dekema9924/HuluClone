import logo1 from "../assets/Images/Sports-img/live-sports-logo-1.png"
import logo2 from "../assets/Images/Sports-img/live-sports-logo-2.png"
import logo3 from "../assets/Images/Sports-img/live-sports-logo-3.svg"
import logo4 from "../assets/Images/Sports-img/live-sports-logo-4.png"



const Sports = () =>{
    return(
        <div className="--sports-section">
            <div className="--sports-text">
                <h1>Live Sports</h1>
                <p>Catch your games at home
                 or on the go. Stream live games from major
                  college and pro leagues including the
                   NCAA®, NBA, NHL, NFL, and more.
                </p>
                <div className="--sports-logos">
                    <div className="--img-border"><img src={logo1} alt="cbs-sports-logo" /></div>
                    <div className="--img-border"><img src={logo2} alt="cbs-sports-logo" /></div>
                    <div className="--img-border"><img src={logo3} alt="cbs-sports-logo" /></div>
                    <div className="--img-border"><img src={logo4} alt="cbs-sports-logo" /></div>
                </div>
                <p>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href="#">See Details</a></p>
            </div>
        </div>
    )
}

export default Sports;