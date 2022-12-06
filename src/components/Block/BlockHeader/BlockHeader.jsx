import React from 'react';
import { lazy } from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useBlock } from '../BlockContext';

import s from './BlockHeader.module.scss';

const BlockActions = lazy(() => import('../BlockActions/BlockActions'));
const BlockHeader = () => {
  const { title = 'Title', iconId = 'info', isDarkTheme, actions, headerStyles, headerClassName } = useBlock();
  return (
    <div className={[s.header, headerClassName, isDarkTheme ? s.Dark : s.Light].join(' ')} style={headerStyles}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <span className={s.title}>
        <span className={s.titleInner} title={title}>
          {title}
        </span>
      </span>

      {actions && <BlockActions />}
    </div>
  );
};

export default BlockHeader;
