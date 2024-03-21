import React from "react";



const Login = ()=>{

    const [open, setOpen] = React.useState(true)

    return(
        <form action="" style={open == false ? {display: 'none'}: null}>
            <i class="fa-solid fa-x fa-lg --close" onClick={()=>setOpen(false)}></i>
            <div className="--login-header">
            <h1>Log In</h1>
                <p>You will use this email and password to log 
                        into your accounts for all your 
                        favorite services across 
                        The Walt Disney Family of Companies,
                        including Disney+, Hulu and ESPN+. <a href="#">Learn more</a>
                </p>
            </div>
       
           <div className="--inputs">
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="" />
                
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="" />

                <a href="#">Forgot your email or password?</a>
                <input type="submit" value="Log In" />

                <div className="--free-trial">
                    <p>Don't have an account? <a href="#">Start your free trail</a></p>
                </div>
           </div>
            
      
        </form>
    )
}

export default Login;

