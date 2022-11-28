import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './Action.module.scss';

const ActionPrimary = ({ name, status = false, iconId = 'close', title = 'title', onClick }) => {
  const actionClass = status ? s.actionActive : s.actionNotActive;

  return (
    <>
      <li className={s.listItem}>
        <ButtonIcon iconId={iconId} size="100%" className={actionClass} onClick={onClick} />
        <span className={s.actionTitle}>{title}</span>
      </li>
      {/* <span className={s.actionTitle}>{title}</span> */}
    </>
  );
};

export default ActionPrimary;
