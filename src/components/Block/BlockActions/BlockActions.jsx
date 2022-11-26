import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockPortal from '../BlockPortal';
import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = ({
  link = true,
  copy = true,
  share = true,
  refresh = true,
  filter = true,
  search = true,
  editItem = true,
  createItem = true,
  deleteItem = true,
  printDoc = true,
  exportDoc = true,
  importDoc = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const block = useBlock();
  function handleOpenActions(evt) {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <ButtonIcon iconId={isOpen ? 'close' : 'actions-h'} size="100%" onClick={handleOpenActions} />
      <BlockPortal id={block.iconId}>
        <div className={isOpen ? s.actionsBackdropOpen : s.actionsBackdrop} onClick={handleOpenActions}>
          <div className={s.actionsContainer}>
            <span>Додатково</span>
            {isOpen && (
              <ul className={s.actionsList}>
                {link && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="link" size="100%" className={s.hover} />
                  </li>
                )}
                {copy && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="search" size="100%" className={s.hover} />
                  </li>
                )}
                {share && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="filter-on" size="100%" className={s.hover} />
                  </li>
                )}
                {refresh && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="copy" size="100%" className={s.hover} />
                  </li>
                )}
                {filter && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="share" size="100%" className={s.hover} />
                  </li>
                )}
                {search && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="refresh" size="100%" className={s.hover} />
                  </li>
                )}
                {editItem && (
                  <li className={s.listItem}>
                    {' '}
                    <ButtonIcon iconId="edit" size="100%" className={s.hover} />
                  </li>
                )}
                {deleteItem && (
                  <li className={s.listItem}>
                    <ButtonIcon iconId="delete" size="100%" className={s.hover} />
                  </li>
                )}
                {createItem && (
                  <li className={s.listItem}>
                    {' '}
                    <ButtonIcon iconId="plus" size="100%" className={s.hover} />
                  </li>
                )}
                {printDoc && (
                  <li className={s.listItem}>
                    {' '}
                    <ButtonIcon iconId="print-on" size="100%" className={s.hover} />
                  </li>
                )}
                {exportDoc && (
                  <li className={s.listItem}>
                    {' '}
                    <ButtonIcon iconId="upload" size="100%" className={s.hover} />
                  </li>
                )}
                {importDoc && (
                  <li className={s.listItem}>
                    {' '}
                    <ButtonIcon iconId="download" size="100%" className={s.hover} />
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </BlockPortal>
    </>
  );
};

export default BlockActions;
