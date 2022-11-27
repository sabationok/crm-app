import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderFilter.module.scss';

const BlockHeaderFilter = () => {
  const { title = 'Title', iconId = 'info', blockFilterParams } = useBlock();
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <BlockSearch blockFilterParams={blockFilterParams} />

      {title && (
        <span className={s.title}>
          <span title={title}>{title}</span>
        </span>
      )}
      <BlockActions />
    </div>
  );
};

export default BlockHeaderFilter;
