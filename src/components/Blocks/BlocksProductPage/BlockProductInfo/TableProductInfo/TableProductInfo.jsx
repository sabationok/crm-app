import React from 'react';

import s from './TableProductInfo.module.scss';

const TableProductInfo = ({children}) => {
  return <div className={s.tableGrid}>{children}</div>;
};

export default TableProductInfo;
