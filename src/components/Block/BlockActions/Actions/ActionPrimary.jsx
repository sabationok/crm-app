import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './Action.module.scss';

const ActionPrimary = ({ name, status = true, iconId = 'close', title = 'title', onClick }) => {
  return (
    <>
      <div className={s.listItem}>
        <ButtonIcon iconId={iconId} iconSize="80%" className={s.actionBtn} onClick={onClick} disabled={!status} title={title} />
        <span className={s.actionTitle}>{title}</span>
      </div>
    </>
  );
};

export default ActionPrimary;
