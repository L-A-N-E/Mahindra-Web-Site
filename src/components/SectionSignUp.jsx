import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginStyleSignUp } from '../styles/LoginStyle'
import { useTranslation } from 'react-i18next';
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'
import { handleSignUp,googleSignIn } from '../utils/authUtils';

const SectionSignUp = () => {

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

        try {
            await handleSignUp(email, password, confirmPassword, username);
        } catch (error) {
            console.log('Erro', error.message);
        }
    };

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
                            <img src={LogoMahindra} alt='Logo Mahindra' />
                            <h2>{t('welcome')}</h2>
                        </div>

                        {/* Mid */}
                        <div className='mid-acc' onSubmit={onSignUp} >
                            <form action='/login' method='POST'>
                                <input type='text' name='username' placeholder={t('username')} value={username} onChange={(e) => setUsername(e.target.value)} required/>
                                <input type='text' name='email' placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                                <input type='password' name='password' placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                                <input type='password' name='repeat-password' placeholder={t('repeat-password')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  required/>

                                <button type='submit'>{t('signup')}</button>
                            </form>
                            <p>{t('have-an-account')} <button><Link to ='/login'>{t('Login')}</Link></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button onClick={googleSignIn}><img src={LogoGoogle} alt='#' /> {t('signup-with-google')}</button>
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