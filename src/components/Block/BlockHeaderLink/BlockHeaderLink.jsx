import React from 'react';
import { lazy } from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderLink.module.scss';
const BlockActions = lazy(() => import('../BlockActions/BlockActions'));
const BlockHeaderLink = () => {
  const { title = 'Title', subTitle = 'link', iconId = 'info' } = useBlock();
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <span className={s.title}>
        <span className={s.titleInner} title={title}>
          {title}
        </span>
      </span>
      <span className={s.headerLink}>
        <span className={s.subTitle} title={subTitle}>
          {subTitle}
        </span>
      </span>

      <BlockActions />
    </div>
  );
};

export default BlockHeaderLink;
