import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginSignUpStyle, LoginSignUpLeft, LoginSignUpRight, LoginSignUpContainer, LoginSignUpTop, LoginSignUpMid, LoginSignUpBottom} from '../../styles/LoginSignUpStyle';
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../../assets/login_signup/logo-google.svg'
import { googleSignIn, handleAuthentication } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';

const SectionLogin = () => {

    const { t, i18n } = useTranslation();    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    const onLoginPress = (event) => {
        event.preventDefault();
        handleAuthentication(email, password, isLogin, user, t, navigate);
    };
    
    const handleSignInWithPopUp = (event) => {
        event.preventDefault();
        googleSignIn(t, navigate)
    }
    
    return (
        <>
        <LoginSignUpStyle>
                {/* Left */}
                <LoginSignUpLeft></LoginSignUpLeft>

                {/* Right */}
                <LoginSignUpRight>
                    <LoginSignUpContainer>
                        {/* Top */}
                        <LoginSignUpTop>
                            <img src={LogoMahindra} alt='' />
                            <h2>{t('welcome-back')}</h2>
                        </LoginSignUpTop>

                        {/* Mid */}
                        <LoginSignUpMid>
                            <form action='/login' onSubmit={onLoginPress} >
                                <input type='text' name='username' placeholder={t('username')} value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <input type='password' name='password' placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <a href='/' className='forgot-password'>{t('forgot-password')}</a>
                                <button type='submit'>{t('login')}</button>
                            </form>
                            <p>{t('account')} <button><a href='/sign-up'>{t('signup')}</a></button></p>
                        </LoginSignUpMid>

                        {/* End */}
                        <LoginSignUpBottom>
                            <button onClick={handleSignInWithPopUp}><img src={LogoGoogle} alt="#"/>{t('login-google')}</button>
                        </LoginSignUpBottom>
                        
                    </LoginSignUpContainer>
                </LoginSignUpRight>
        </LoginSignUpStyle>
        </>
    )
}

export default SectionLogin