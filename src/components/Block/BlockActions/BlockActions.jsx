import React, { useState, useMemo, useEffect } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockPortal from '../BlockPortal';
import BlockActionsList from './BlockActionsList';
import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const block = useBlock();
  const memoizedActionsArr = useMemo(() => {
    switch (block.type) {
      case 'primary':
        return block.actionsBlockSmall;

      case 'filtered':
        return block.actionsBlockLarge;

      default:
        return [];
    }
  }, [block.actionsBlockLarge, block.actionsBlockSmall, block.type]);

  function handleOpenActions(evt) {
    setIsOpen(!isOpen);
  }
  function handleOpenActionsByEscape(ev) {
    let { code } = ev;
    if (code === 'Escape') {
      console.log(ev);
      setIsOpen(false);
      return;
    }
    return;
  }
  useEffect(() => {
    if (!isOpen) {
      window.removeEventListener('keydown', handleOpenActionsByEscape);
      return;
    } else if (isOpen) {
      window.addEventListener('keydown', handleOpenActionsByEscape);
      return;
    }
  }, [isOpen]);
  return (
    <>
      <ButtonIcon iconId={isOpen ? 'close' : 'actions-h'} size="100%" onClick={handleOpenActions} />
      <BlockPortal id={block.iconId}>
        <div className={isOpen ? s.actionsBackdropOpen : s.actionsBackdrop} onClick={handleOpenActions}>
          <div className={s.actionsContainer}>
            <span>Додатково</span>
            {isOpen && memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
          </div>
        </div>
      </BlockPortal>
    </>
  );
};

export default BlockActions;
