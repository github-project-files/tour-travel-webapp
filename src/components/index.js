import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n';

function Header1() {
  const { t } = useTranslation()
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className='nav-link nav-item' to= '/'><h2>{t('Brand.-T&T-')}</h2></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <Link className='nav-link nav-item' to= '#'>{t('Navigation.Hotel')}</Link>
                <Link className='nav-link nav-item' to= "#">{t('Navigation.Tour')}</Link>
                    <Link className='nav-link nav-item' to= "#">{t('Navigation.Flight')}</Link>
                    <Link className='nav-link nav-item' to= "#">{t('Navigation.Buses')}</Link>
                    <Link className='nav-link nav-item' to= "/Login">{t('Navigation.Login')}</Link>
                    <Link className='nav-link nav-item' to= "/SignUp">{t('Navigation.Signup')}</Link>           
            </ul>
      <div class="btn-group" role="group" aria-label="Basic example">         
            <button className='btn btn-secondary' type='button' onClick={() => changeLanguage('en')}>{t('translation:en')} </button>
            <button className='btn btn-secondary' type='button' onClick={() => changeLanguage('ar')}>{t('translation:ar')}</button >
            <button className='btn btn-primary' type='button'>Contact us</button >
      </div>  
        </div>
        </nav>
  )
}

export default Header1
