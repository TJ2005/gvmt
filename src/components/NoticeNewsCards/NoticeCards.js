import React from 'react';
import { useTranslation } from "react-i18next";
import './NoticeCards.css';

const NoticeNewsCards = () => {
     const { t, i18n } = useTranslation();

     return(
      <div className="cards-row main-content">
        <div className="card-col">
          <div className="card-title">{t('common.notice')}</div>
          <div className="card-body">
          {t('common.noticeHeader')}
            <div className='section-divider'></div>
            {t('common.noticeSubHeader')}
          </div>
        </div>
        <div className="card-col">
          <div className="card-title">{t('common.latestNews')}</div>
          <div className="card-body">
          {t('common.noticeHeader')}
            <div className='section-divider'></div>
            {t('common.noticeSubHeader')}
          </div>
        </div>
      </div>
      )
 
  };

export default NoticeNewsCards;
