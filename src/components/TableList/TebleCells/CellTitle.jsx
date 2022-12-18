import React from 'react';
// import PropTypes from 'prop-types';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTitle = ({ title, idx, className = '' }) => {
  const classNames = [s.title, s[title?.action], ...className].join(' ');

  return (
    <div className={classNames} title={title?.name || 'Empty'}>
      {title?.name || 'Empty'}
    </div>
  );
};

CellTitle.propTypes = {};

export default CellTitle;
