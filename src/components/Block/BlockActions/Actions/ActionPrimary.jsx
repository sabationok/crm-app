import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './Action.module.scss';

const ActionPrimary = ({ status = true, size = '40px', iconId = 'close', title = 'title', onClick }) => {
  return (
    <>
      <div className={s.listItem}>
        <ButtonIcon iconId={iconId} iconSize="80%" size={size} className={s.actionBtn} onClick={onClick} disabled={!status} title={title} />
        <span className={s.actionTitle}>{title}</span>
      </div>
    </>
  );
};

export default ActionPrimary;
