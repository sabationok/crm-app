import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ButtonLink from 'components/ButtonLink/ButtonLink';

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
  return (
    <div className={s.actionsContainer}>
      <ButtonIcon iconId="actions-h" size="100%" />
      <div className={s.actionsList}>
        {link && (
          <ButtonLink to="#" size="100%" className={s.hover}>
            <SvgIcon iconId="link" size="100%" />
          </ButtonLink>
        )}
        {copy && <ButtonIcon iconId="search" size="100%" className={s.hover} />}
        {share && <ButtonIcon iconId="filter-on" size="100%" className={s.hover} />}
        {refresh && <ButtonIcon iconId="copy" size="100%" className={s.hover} />}
        {filter && <ButtonIcon iconId="share" size="100%" className={s.hover} />}
        {search && <ButtonIcon iconId="refresh" size="100%" className={s.hover} />}
        {editItem && <ButtonIcon iconId="edit" size="100%" className={s.hover} />}
        {deleteItem && <ButtonIcon iconId="delete" size="100%" className={s.hover} />}
        {createItem && <ButtonIcon iconId="plus" size="100%" className={s.hover} />}
        {printDoc && <ButtonIcon iconId="print-on" size="100%" className={s.hover} />}
        {exportDoc && <ButtonIcon iconId="upload" size="100%" className={s.hover} />}
        {importDoc && <ButtonIcon iconId="download" size="100%" className={s.hover} />}
      </div>
    </div>
  );
};

export default BlockActions;
