import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './BlockActions.module.scss';

const ActionLink = ({ status, iconId, title }) => {
  const actionClass = status ? s.actionActive : s.actionNotActive;

  return (
    <ButtonIcon iconId={iconId || 'close'} size="100%" className={actionClass}>
      <span className={s.actionTitle}>{title}</span>
    </ButtonIcon>
  );
};

export default ActionLink;
