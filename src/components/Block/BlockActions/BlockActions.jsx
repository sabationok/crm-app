import React, { useEffect } from 'react';

import BlockActionsList from './ActionsList/ActionsList';

import { useBlockActionsCTX } from './BlockActionsProvider';
import s from './BlockActions.module.scss';

const BlockActions = () => {
  const { actions = [], handleToggleActions, isActionsOpen = false } = useBlockActionsCTX();

  function onBackdropClick(ev) {
    const { target, currentTarget } = ev;

    if (target !== currentTarget) {
      return;
    }

    handleToggleActions();
  }

  useEffect(() => {
    function handleCloseActions(ev) {
      const { code } = ev;
      if (code === 'Escape') {
        handleToggleActions();
      }
    }

    window.addEventListener('keydown', handleCloseActions);

    return () => window.removeEventListener('keydown', handleCloseActions);
  }, [handleToggleActions]);

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
