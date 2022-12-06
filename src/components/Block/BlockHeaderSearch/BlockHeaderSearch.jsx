import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderSearch.module.scss';

const BlockHeaderSearch = () => {
  const { title = 'Title', iconId = 'info', isSearch, isDarkTheme, actions, headerStyles, headerClassName } = useBlock();

  return (
    <div className={[!isSearch ? s.header : s.headerWithSearch, isDarkTheme ? s.Dark : s.Light, headerClassName].join(' ')} style={headerStyles}>
      <SvgIcon iconId={iconId} size={'24px'} />

      {isSearch && <BlockSearch />}

      {title && (
        <span className={s.title}>
          <span title={title}>{title}</span>
        </span>
      )}

      {actions && <BlockActions />}
    </div>
  );
};

export default BlockHeaderSearch;
