import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderSearch.module.scss';

const BlockHeaderSearch = ({ search }) => {
  const { title = 'Title', iconId = 'info' } = useBlock();
  const headerClassName = !search ? s.header : s.headerWithSearch;

  return (
    <div className={headerClassName}>
      <SvgIcon iconId={iconId} size={'24px'} />

      {search && <BlockSearch />}

      {title && (
        <span className={s.title}>
          <span title={title}>{title}</span>
        </span>
      )}

      <BlockActions />
    </div>
  );
};

export default BlockHeaderSearch;
