import React from 'react';

import s from './BlockEmpty.module.scss';

const BlockEmpty = ({ title }) => {
  return (
    <div className={s.emptyBlock}>
      <span>{title}</span>
    </div>
  );
};

export default BlockEmpty;
