import React, { useState, useMemo, useEffect } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockPortal from '../BlockPortal';
import BlockActionsList from './ActionsList/ActionsList';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const block = useBlock();

  const memoizedActionsArr = useMemo(() => {
    switch (block.actions) {
      case 'primary':
        return block.actionsPrimary;

      case 'withFilter':
        return block.actionsWithFilter;

      default:
        return [];
    }
  }, [block.actions, block.actionsPrimary, block.actionsWithFilter]);

  function handleOpenActions(evt) {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleCloseActionsByEscape(ev) {
      let { code } = ev;
      if (code === 'Escape') {
        setIsOpen(false);
        window.removeEventListener('keydown', handleCloseActionsByEscape);
        return;
      }
      return;
    }
    if (!isOpen) {
      window.removeEventListener('keydown', handleCloseActionsByEscape);
      return;
    } else if (isOpen) {
      window.addEventListener('keydown', handleCloseActionsByEscape);
      return;
    }
  }, [isOpen]);

  return (
    <>
      <ButtonIcon iconId={isOpen ? 'close' : 'actions-h'} size="100%" iconSize="24px" onClick={handleOpenActions} />
      <BlockPortal id={block.iconId}>
        <div className={isOpen ? s.actionsBackdropOpen : s.actionsBackdrop} onClick={handleOpenActions}>
          {isOpen && (
            <div className={s.actionsContainer}>
              <span className={s.actionsTitle}>{`Додаткові дії блоку "${block.title}"`}</span>
              {memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
            </div>
          )}
        </div>
      </BlockPortal>
    </>
  );
};

export default BlockActions;
