import disney_logo from '../assets/Images/logos/disney+.png'
import logo from '../assets/Images/logos/logo.png'
import logos from '../assets/Images/logos/logos.png'
import React from 'react'
import Login from './Login'


const Header = ()=>{
    //open anc clise form
    const [isOpen, setIsOpen] = React.useState(false);
    
//open and close hamburger menu
const [active, setactive] = React.useState(false);

//for mobile nav
const [mobileactive, setmobileactive] = React.useState(false);





  

    return(
        <div className="--header-container">
            <header>
                <nav>
                    <img src={logo}className='--logo' alt="hulu-logo-img" />
                    <a href="#" className='--login' onClick={()=>setIsOpen(!isOpen)}>Log in</a>
                    <div className="--hamburger-menu" onClick={()=>setactive(!active)}>
                        <span className='--line'></span>
                        <span className='--line'></span>
                        <span className='--line'></span>
                    </div>
                </nav>

                
                <div className= "--sign-up" style={
                    active ? {display: 'flex'} : {display: "none"}}>
                        <button onClick={()=>setmobileactive(!mobileactive)}>Log In</button>
                        <button>Sign Up Now</button>
                </div>
                    {isOpen ? <Login/> : null}
                    {mobileactive ? <Login/> : ""}


            </header>

            <div className="--subheader">
                    <div className="--duo-basic">
                        <h4>Disney Bundle Basic</h4>
                        <div className="--bundle-img">
                            <img src={logo} className='--logo' alt="hulu-logo-img" />
                            <img src={disney_logo} style={{width: '100px'}} alt="disney-logo-img" />
                        </div>
                        <p>Both with ads, for $9.99/month</p>
                        <button>Get them both</button>
                    </div>
                    <div className="--trio-basic">
                        <h4>Disney Bundle Trio</h4>
                        <div className="--bundle-img">
                            <img src={logos} className='--logo' style={{width: '200px', height: "62px"}} alt="hulu-logo-img" />
                        </div>
                        <p>Both with ads, for $14.99/month</p>
                        <button>Get All Three</button>
                    </div>
            </div>
            <div className="--terms">
                <a href="#">Terms apply</a>
                <a href="#">Sign up for Hulu Only</a>
                <p>View more plans</p>
                <div className="--more-plans">
                   <a href="#"><i class="fa-solid fa-arrow-right fa-lg --arrow"></i></a>
                </div>
            </div>
            
        </div>

    )
    
}

export default Header;