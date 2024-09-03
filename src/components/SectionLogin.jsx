import React from 'react'
import { useTranslation } from 'react-i18next'
import { LoginStyleSignUp } from '../styles/LoginStyle';
import LogoMahindra from '../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../assets/login/logo-google.svg'

const SectionLogin = () => {
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
                            <h2>{t('welcome-back')}</h2>
                        </div>

                        {/* Mid */}
                        <div className='mid-acc'>
                            <form action="/login">
                                <input type="text" name="username" placeholder={t('username')} required/>
                                <input type="password" name="password" placeholder={t('password')} required/>
                                <a href="/" class="forgot-password">{t('forgot-password')}</a>
                                <button type="submit">{t('login')}</button>
                            </form>
                            <p>{t('account')} <button><a href="/sign-up">{t('signup')}</a></button></p>
                        </div>

                        {/* End */}
                        <div className='end-acc'>
                            <div>
                                <button><img src={LogoGoogle} alt="#" />{t('login-google')}</button>
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