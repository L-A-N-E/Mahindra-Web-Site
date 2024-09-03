import React from 'react'
import { Link } from 'react-router-dom'
import { LoginStyleSignUp } from '../styles/LoginStyle'
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'

const SectionSignUp = () => {
    return (
        <>
        <LoginStyleSignUp>
            <section>
                {/* Left */}
                <div id='left-login-sign-up'></div>

                {/* Right */}
                <div id='right-login-sign-up'>
                    <div className='container-acc'>
                        {/* Top */}
                        <div className='top-acc'>
                            <img src={LogoMahindra} alt="" />
                            <h2>Welcome Back!</h2>
                        </div>

                        {/* Mid */}
                        <div className='mid-acc'>
                            <form action="/login" method="POST">
                                <input type="text" name="username" placeholder="Username" required/>
                                <input type="text" name="email" placeholder="Email" required/>
                                <input type="password" name="password" placeholder="Password" required/>
                                <input type="password" name="repeat-password" placeholder="Repeat Password" required/>
                                <button type="submit">Sign-Up</button>
                            </form>
                            <p>Have an account? <button><Link to ='/login'>Login</Link></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button><img src={LogoGoogle} alt="#" /> Sign-Up with Google</button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </LoginStyleSignUp>
        </>
    )
}

export default SectionSignUp