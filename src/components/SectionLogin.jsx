import React, {useRef} from 'react'
import { LoginStyle } from '../styles/LoginStyle';
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'

const SectionLogin = () => {
    return (
        <>
        <LoginStyle>
            <section>
                {/* Left */}
                <div id='left-login'></div>

                {/* Right */}
                <div id='right-login'>
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
                                <input type="password" name="password" placeholder="Password" required/>
                                <a href="/" class="forgot-password">Forgot your password?</a>
                                <button type="submit">Login</button>
                            </form>
                            <p>Don't have an account? <button><a href="/sign-up">Sign-Up</a></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button><img src={LogoGoogle} alt="#" /> Login with Google</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </LoginStyle>
        </>
    )
}

export default SectionLogin