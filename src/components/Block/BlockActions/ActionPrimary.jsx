import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './BlockActions.module.scss';

const ActionPrimary = ({ status = false, iconId = 'close', title = 'title' }) => {
  const actionClass = !status ? s.actionActive : s.actionNotActive;

  return (
    <ButtonIcon iconId={iconId} size="100%" className={actionClass}>
      <span className={s.actionTitle}>{title}</span>
    </ButtonIcon>
  );
};

export default ActionPrimary;
