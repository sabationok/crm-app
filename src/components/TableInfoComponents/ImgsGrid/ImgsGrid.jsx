import React from 'react';

import s from './ImgsGrid.module.scss';

const ImgsGrid = ({ imgs }) => {
  return (
    <div className={s.imgsIn}>
      {/* <p>Фото</p> */}
      <div className={s.imgsGrid}>
        {imgs.map(img => {
          return (
            <div key={img.name} className={s.ImgBox}>
              <img src={img?.src} alt={img?.name} />
            </div>
          );
        })}

        {imgs.map(img => {
          return (
            <div key={img.name} className={s.ImgBox}>
              <img src={img?.src} alt={img?.name} />
            </div>
          );
        })}

        {imgs.map(img => {
          return (
            <div key={img.name} className={s.ImgBox}>
              <img src={img?.src} alt={img?.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgsGrid;
