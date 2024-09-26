import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginSignUpStyle, LoginSignUpLeft, LoginSignUpRight, LoginSignUpContainer, LoginSignUpTop, LoginSignUpMid, LoginSignUpBottom} from '../../styles/LoginSignUpStyle';
import { useTranslation } from 'react-i18next';
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../../assets/login_signup/logo-google.svg'
import { handleSignUp,googleSignIn } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';


const SectionSignUp = () => {

    const navigate = useNavigate();
    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSignUp = async (event) => {
        event.preventDefault();
        handleSignUp(email, password, confirmPassword, username, t, navigate);
    };

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
                            <img src={LogoMahindra} alt='Logo Mahindra' />
                            <h2>{t('welcome')}</h2>
                        </LoginSignUpTop>

                        {/* Mid */}
                        <LoginSignUpMid>
                            <form action='/login' method='POST' onSubmit={onSignUp}>
                                <input type='text' name='username' placeholder={t('username')} value={username} onChange={(e) => setUsername(e.target.value)} required/>
                                <input type='text' name='email' placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                                <input type='password' name='password' placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                                <input type='password' name='repeat-password' placeholder={t('repeat-password')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  required/>

                                <button type='submit'>{t('signup')}</button>
                            </form>
                            <p>{t('have-an-account')} <button><Link to ='/login'>{t('Login')}</Link></button></p>
                        </LoginSignUpMid>

                        {/* End */}
                        <LoginSignUpBottom>
                            <button onClick={googleSignIn}><img src={LogoGoogle} alt='#' /> {t('signup-with-google')}</button>
                        </LoginSignUpBottom>                        
                    </LoginSignUpContainer>
                </LoginSignUpRight>
        </LoginSignUpStyle>
        </>
    )
}

export default SectionSignUp