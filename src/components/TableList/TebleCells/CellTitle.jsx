import React from 'react';
// import PropTypes from 'prop-types';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTitle = ({ title, idx, className = '', onClick }) => {
  const classNames = [s.title, s[title?.action], ...className].join(' ');

  return (
    <div style={{ width: title?.width }} className={classNames} title={title?.name || 'Empty'} onClick={onClick}>
      {title?.name || 'Empty'}
    </div>
  );
};

CellTitle.propTypes = {};

export default CellTitle;
