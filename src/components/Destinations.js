import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n';

const Destinations = () => {
    const img1 = 'https://via.placeholder.com/300X250';

    const { t } = useTranslation()
    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <section className='destinations'>
      <h3>{t('ContentArea.content')}</h3>
        <div class="container">
          <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <img src={img1} class="img-thumbnail" alt="Responsive image" />
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img src={img1} class="img-thumbnail" alt="Responsive image" />
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img src={img1} class="img-thumbnail" alt="Responsive image" />
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            {/* <div class="col-sm">
                <div>
                  <img src={img1} class="img-thumbnail" alt="Responsive image" />
                  <h3>{t('BoxContent.title1')}</h3>
                  <p>
                    {t('BoxContent.description')}
                  </p>
                </div>
            </div>
            <div class="col-sm">
              <div>
                  <img src={img2} class="img-thumbnail" alt="Responsive image" />
                  <h3>{t('BoxContent.title2')}</h3>
                  <p>
                    {t('BoxContent.description')}
                  </p>
                </div>
            </div>
            <div class="col-sm">
              <div>
                  <img src={img3} class="img-thumbnail" alt="Responsive image" />
                  <h3>{t('BoxContent.title3')}</h3>
                  <p>
                    {t('BoxContent.description')}
                  </p>
                </div>
            </div> */}
          </div>
        </div>
    </section>
  )
}

export default Destinations