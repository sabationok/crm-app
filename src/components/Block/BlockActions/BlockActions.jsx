import React, { useState, useMemo } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import BlockActionsList from './ActionsList/ActionsList';

// import BlockModalPortal from '../BlockModal/BlockModalPortal';

import blockActions from '../blockActions';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { actions, ActionsComp } = useBlock();
  function handleIsOpen(params) {
    setIsOpen(!isOpen);
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
      <ButtonIcon iconId={isOpen ? 'close' : 'actions-h'} size="30px" iconSize="100%" className={s.btn} onClick={handleIsOpen} />

      <div className={isOpen ? s.actionsOpen : s.actions}>
        <div className={[s.actionsBox, 'theme'].join(' ')}>
          <>
            {ActionsComp && <ActionsComp />}
            {memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
          </>
        </div>
      </div>
    </>
  );
};

export default BlockActions;
