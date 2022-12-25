import React, { useMemo } from 'react';

import BlockActionsList from './ActionsList/ActionsList';

// import BlockModalPortal from '../BlockModal/BlockModalPortal';

import blockActions from '../blockActions';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const { actions, ActionsComp, handleToggleAction, isActionsOpen } = useBlock();

  function onBackdropClick(ev) {
    const { target, currentTarget } = ev;
    if (target !== currentTarget) {
      return;
    }
    handleToggleAction();
  }

  const memoizedActionsArr = useMemo(() => {
    switch (actions) {
      case 'primary':
        return blockActions.actionsPrimary;

      case 'withFilter':
        return blockActions.actionsWithFilter;

      default:
        return [];
    }
  }, [actions]);

  return (
    <>
      <div className={[s.actionsBackdrop, isActionsOpen && s.isOpen].join(' ')} onClick={onBackdropClick}>
        <div className={s.actionsList} onClick={onBackdropClick}>
          {ActionsComp && <ActionsComp />}

          {memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
        </div>
      </div>
    </>
  );
};

export default BlockActions;
