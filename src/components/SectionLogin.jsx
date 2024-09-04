// Importando dependencias
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginStyleSignUp } from '../styles/LoginStyle';
// Importando imagens
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'
// Importando funções
import { googleSignIn, handleAuthentication } from '../utils/authUtils';

const SectionLogin = () => {
    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onLoginPress = (event) => {
        event.preventDefault();
        handleAuthentication(email, password, isLogin, user);
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
                            <img src={LogoMahindra} alt='' />
                            <h2>{t('welcome-back')}</h2>
                        </div>

                        {/* Mid */}
                        <div className='mid-acc'>
                            <form action='/login' onSubmit={onLoginPress} >
                                <input type='text' name='username' placeholder={t('username')} value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <input type='password' name='password' placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <a href='/' className='forgot-password'>{t('forgot-password')}</a>
                                <button type='submit'>{t('login')}</button>
                            </form>
                            <p>{t('account')} <button><a href='/sign-up'>{t('signup')}</a></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button onClick={googleSignIn}><img src={LogoGoogle} alt='#'/>{t('login-google')}</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </LoginStyleSignUp>
        </>
    )
}

export default SectionLogin