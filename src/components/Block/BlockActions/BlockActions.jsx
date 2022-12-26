import React from 'react';

import BlockActionsList from './ActionsList/ActionsList';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const { actions, handleToggleAction, isActionsOpen } = useBlock();

  function onBackdropClick(ev) {
    const { target, currentTarget } = ev;
    if (target !== currentTarget) {
      return;
    }
    handleToggleAction();
  }

  if (typeof actions !== 'object') {
    return;
  }
  return (
    <>
      <div className={[s.actionsBackdrop, isActionsOpen && s.isOpen].join(' ')} onClick={onBackdropClick}>
        <div className={s.actionsList} onClick={onBackdropClick}>
          {actions && actions.length > 0 && <BlockActionsList arr={actions} />}
        </div>
      </div>
    </>
  );
};

export default BlockActions;
