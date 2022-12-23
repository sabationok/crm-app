import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useBlock } from '../BlockContext';

import s from './BlockHeaderSearch.module.scss';

const BlockHeaderSearch = () => {
  const {
    title = 'Title',
    iconId = 'info',
    isSearch,
    isDarkTheme,
    actions,
    headerStyles,
    headerClassName,
    isFullPageMode,
    actionToglleFullPageMode,
  } = useBlock();

  return (
    <div className={[!isSearch ? s.header : s.headerWithSearch, isDarkTheme ? s.Dark : s.Light, headerClassName].join(' ')} style={headerStyles}>
      <SvgIcon iconId={iconId} size={'24px'} />

      {isSearch && <BlockSearch />}

      {!isSearch && title && (
        <span className={s.title}>
          <span title={title}>{title}</span>
        </span>
      )}

      <MinTabletXl>
        {
          <ButtonIcon
            iconId={isFullPageMode ? 'zoomMinus' : 'zoomPlus'}
            size="30px"
            iconSize={isFullPageMode ? '85%' : '90%'}
            onClick={actionToglleFullPageMode}
            className={s.btn}
          />
        }
      </MinTabletXl>

      {actions && <BlockActions />}
    </div>
  );
};

export default BlockHeaderSearch;
