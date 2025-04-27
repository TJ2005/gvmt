import React from 'react';
import './NoticeCards.css';

const NoticeNewsCards = () => (
  <div className="cards-row main-content">
    <div className="card-col">
      <div className="card-title">सूचना</div>
      <div className="card-body">
        तुम्हाला सर्व सूचना लॉग इन द्वारे दिसतील.
        <div className='section-divider'></div>
        सर्व सूचना तुम्हाला येथे दिसतील.
      </div>
    </div>
    <div className="card-col">
      <div className="card-title">ताज्या बातम्या</div>
      <div className="card-body">
        तुम्हाला सर्व ताज्या बातम्या लॉग इन द्वारे दिसतील.
         <div className='section-divider'></div>

        सर्व ताज्या बातम्या तुम्हाला येथे दिसतील.
      </div>
    </div>
  </div>
);

export default NoticeNewsCards;
