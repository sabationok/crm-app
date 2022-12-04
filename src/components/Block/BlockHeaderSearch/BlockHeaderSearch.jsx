import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderSearch.module.scss';

const BlockHeaderSearch = () => {
  const { title = 'Title', iconId = 'info', isSearch, isDarkTheme } = useBlock();
  const headerClassName = [!isSearch ? s.header : s.headerWithSearch, isDarkTheme ? s.Dark : s.Light].join(' ');

  return (
    <div className={headerClassName}>
      <SvgIcon iconId={iconId} size={'24px'} />

      {isSearch && <BlockSearch />}

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
