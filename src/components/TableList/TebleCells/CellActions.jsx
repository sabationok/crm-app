import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';
const CellActions = ({ title, idx, className = '', onClick }) => {
  // const { rowData } = useRow();
  const [isOpen, setIsOpen] = useState(false);
  function handleIsopen() {
    setIsOpen(!isOpen);
  }

  const classNames = [isOpen ? s.actionsOpen : s.actions, className].join(' ');
  return (
    <div className={classNames}>
      <ButtonIcon size="100%" iconSize="24px" iconId={isOpen ? 'close' : 'actions-h'} className={s.actionsBtn} onClick={handleIsopen} />

      <div className={s.rowActions}>
        {/* <ButtonIcon size="40px" iconSize="24px" iconId="close" className={s.actionsBtn} onClick={handleIsopen} /> */}
        <ButtonIcon size="40px" iconSize="24px" iconId="delete" className={s.actionsBtn} />
        <ButtonIcon size="40px" iconSize="24px" iconId="copy" className={s.actionsBtn} />
        <ButtonIcon size="40px" iconSize="24px" iconId="visibility-on" className={s.actionsBtn} />
        <ButtonIcon size="40px" iconSize="24px" iconId="share" className={s.actionsBtn} />
        <ButtonIcon size="40px" iconSize="24px" iconId="link" className={s.actionsBtn} />
      </div>
    </div>
  );
};

export default CellActions;
