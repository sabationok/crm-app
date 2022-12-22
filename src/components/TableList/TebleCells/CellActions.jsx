import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';
const CellActions = ({ title, idx, className = '', onClick }) => {
  // const { rowData } = useRow();
  const classNames = [s.actions, className].join(' ');
  return (
    <div className={classNames}>
      <ButtonIcon size="100%" iconSize="24px" iconId="actions-v" className={s.actionsBtn} onClick={onClick} />
    </div>
  );
};

export default CellActions;
