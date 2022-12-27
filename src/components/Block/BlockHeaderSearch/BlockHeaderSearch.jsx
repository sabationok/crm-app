import React from 'react';

import BlockSearch from './BlockSearch/BlockSearch';
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
    actions,
    headerStyles,
    headerClassName,
    isFullPageMode,
    handleToglleFullPageMode,
    fullPageMode,
    handleToggleAction,
    isActionsOpen,
  } = useBlock();

  return (
    <div className={[s.header, 'theme', headerClassName].join(' ')} style={headerStyles}>
      <SvgIcon iconId={iconId} size={'24px'} />

      {isSearch && <BlockSearch />}

      {!isSearch && title && (
        <span className={s.title}>
          <span title={title}>{title}</span>
        </span>
      )}

      {fullPageMode && (
        <MinTabletXl>
          <ButtonIcon
            iconId={isFullPageMode ? 'zoomMinus' : 'zoomPlus'}
            size="30px"
            iconSize={'90%'}
            onClick={handleToglleFullPageMode}
            className={s.btn}
          />
        </MinTabletXl>
      )}

      {actions && (
        <ButtonIcon
          iconId={isActionsOpen ? 'close' : 'actions-v'}
          size="30px"
          iconSize="100%"
          iconClassName={s.svg}
          className={s.btn}
          onClick={handleToggleAction}
        />
      )}
    </div>
  );
};

export default BlockHeaderSearch;
