import React from 'react';

import BlockFounder from './BlockFounder/BlockFounder';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './BlockHeaderFilter.module.scss';

const BlockHeaderFilter = ({ title, iconId = 'info', subTitle, blockFilter, blockFilterParams }) => {
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <BlockFounder blockFilterParams={blockFilterParams} />

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
