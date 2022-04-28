import React from 'react'
import i18n from '../i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'

const Showcase = () => {
   const { t } = useTranslation()
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>{t('BannerContent.showcase')}</h1>
        <p>
         {t('BannerContent.subtitle')}
        </p>
      </div>
    </section>
  )
}

export default Showcase
