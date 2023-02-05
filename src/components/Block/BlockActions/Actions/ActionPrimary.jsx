import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './Action.module.scss';

const ActionPrimary = ({ status = true, size, iconSize = '35%', iconId = 'close', title = 'title', onClick, ...props }) => {
  return (
    <>
      <ButtonIcon
        iconId={iconId}
        iconSize={iconSize}
        size={size}
        className={[s.actionBtn, 'blockAction'].join(' ')}
        onClick={onClick}
        disabled={!status}
        title={title}
        {...props}
      >
        <span className={s.actionTitle}>{title}</span>
      </ButtonIcon>
    </>
  );
};

export default ActionPrimary;
