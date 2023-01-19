import React, { useEffect } from 'react';

import BlockActionsList from './ActionsList/ActionsList';

import { useBlockActionsCTX } from './BlockActionsProvider';
import s from './BlockActions.module.scss';

const BlockActions = () => {
  const { actions = [], handleToggleActions, handleCloseActions, isActionsOpen = false } = useBlockActionsCTX();

  function onBackdropClick(ev) {
    const { target, currentTarget } = ev;

    if (target !== currentTarget) {
      return;
    }

    handleToggleActions();
  }

  useEffect(() => {
    function closeActions(ev) {
      const { code } = ev;
      if (code === 'Escape') {
        handleCloseActions();
      }
      window.removeEventListener('keydown', closeActions);
    }
    if (isActionsOpen) {
      window.addEventListener('keydown', closeActions);
    }

    return () => window.removeEventListener('keydown', closeActions);
  }, [handleCloseActions, isActionsOpen]);

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
