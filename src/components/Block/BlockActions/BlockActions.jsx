import React, { useMemo } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import BlockActionsList from './ActionsList/ActionsList';

import BlockModalPortal from '../BlockModal/BlockModalPortal';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const { isModalOpen, handleToggleModal, iconId, actions, actionsPrimary, actionsWithFilter, ActionsComp } = useBlock();

  const memoizedActionsArr = useMemo(() => {
    switch (actions) {
      case 'primary':
        return actionsPrimary;

      case 'withFilter':
        return actionsWithFilter;

      default:
        return [];
    }
  }, [actions, actionsPrimary, actionsWithFilter]);

  return (
    <>
      <ButtonIcon iconId={isModalOpen ? 'close' : 'actions-h'} size="100%" iconSize="24px" className={s.btn} onClick={handleToggleModal} />
      <BlockModalPortal id={iconId}>
        {isModalOpen && (
          <>
            {memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
            {ActionsComp && <ActionsComp />}
          </>
        )}
      </BlockModalPortal>
    </>
  );
};

export default BlockActions;
