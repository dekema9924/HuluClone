import logo from '../assets/Images/logos/logo.png'

const Header = ()=>{
    return(
       <header>
            <nav>
                <img src={logo} className='--logo' alt="" />
                <div className="--hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
       </header>
    )
    
}

export default Header;