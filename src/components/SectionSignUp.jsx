import React from 'react'
import { Link } from 'react-router-dom'
import { LoginStyleSignUp } from '../styles/LoginStyle'
import { useTranslation } from 'react-i18next';
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'

const SectionSignUp = () => {

    // Select Language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
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
                            <img src={LogoMahindra} alt="" />
                            <h2>{t('welcome')}</h2>
                        </div>

                        {/* Mid */}
                        <div className='mid-acc'>
                            <form action="/login" method="POST">
                                <input type="text" name="username" placeholder={t('username')} required/>
                                <input type="text" name="email" placeholder={t('email')} required/>
                                <input type="password" name="password" placeholder={t('password')} required/>
                                <input type="password" name="repeat-password" placeholder={t('repeat-password')} required/>
                                <button type="submit">{t('signup')}</button>
                            </form>
                            <p>Have an account? <button><Link to ='/login'>{t('Login')}</Link></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button><img src={LogoGoogle} alt="#" /> {t('signup-with-google')}</button>
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