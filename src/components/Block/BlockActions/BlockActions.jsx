import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockPortal from '../BlockPortal';
import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const block = useBlock();

  const actionsMap = {
    link: <ButtonIcon iconId="link" size="100%" className={s.hover} />,
    search: <ButtonIcon iconId="search" size="100%" className={s.hover} />,
    filter: <ButtonIcon iconId="filter-on" size="100%" className={s.hover} />,
    copy: <ButtonIcon iconId="copy" size="100%" className={s.hover} />,
    share: <ButtonIcon iconId="share" size="100%" className={s.hover} />,
    refresh: <ButtonIcon iconId="refresh" size="100%" className={s.hover} />,
    edit: <ButtonIcon iconId="edit" size="100%" className={s.hover} />,
    delete: <ButtonIcon iconId="delete" size="100%" className={s.hover} />,
    create: <ButtonIcon iconId="plus" size="100%" className={s.hover} />,
    print: <ButtonIcon iconId="print-on" size="100%" className={s.hover} />,
    upload: <ButtonIcon iconId="upload" size="100%" className={s.hover} />,
    download: <ButtonIcon iconId="download" size="100%" className={s.hover} />,
  };
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
            {isOpen && block.actions && (
              <ul className={s.actionsList}>
                {block.actions.map(item => (
                  <li className={s.listItem} key={item}>
                    {actionsMap[item]}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </BlockPortal>
    </>
  );
};

export default BlockActions;
