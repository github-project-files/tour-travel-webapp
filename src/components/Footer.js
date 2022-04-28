import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n';

const Footer = () => {
   const { t } = useTranslation()
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <footer className='footer'>
      <ul>
        <li>
          <button>{t('FooterMenu.Home')}</button>
        </li>
         <li>
          <button>{t('FooterMenu.Privacy')}</button>
        </li>
      </ul>

     
    </footer>
  )
}

export default Footer
