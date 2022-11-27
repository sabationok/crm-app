import React from 'react';
import { lazy } from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeader.module.scss';

const BlockActions = lazy(() => import('../BlockActions/BlockActions'));

const BlockHeader = () => {
  const { title = 'Title', iconId = 'info' } = useBlock();
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <span className={s.title}>
        <span className={s.titleInner} title={title}>
          {title}
        </span>
      </span>

      <BlockActions />
    </div>
  );
};

export default BlockHeader;
