import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGrid } from 'redux/page/pageActions';
import { getAppPageSettings } from 'redux/selectors';

import s from './UserMenuActions.module.scss';

const ActionPageGrid = () => {
  const dispatch = useDispatch();
  const { pageGridChange, pageGrid } = useSelector(getAppPageSettings);

  function onGridFirstClick() {
    dispatch(actionSetPageGrid('gridFirst'));
  }
  function onGridSecondClick() {
    dispatch(actionSetPageGrid('gridSecond'));
  }

  return (
    <>
      <MinTabletXl>
        {pageGridChange && (
          <li className={s.actionItemDbl}>
            <ButtonIcon
              iconId="pageGrid-1"
              className={pageGrid === 'gridFirst' ? s.gridChangeBtnActive : s.gridChangeBtn}
              onClick={onGridFirstClick}
            />
            <ButtonIcon
              iconId="pageGrid-2"
              className={pageGrid === 'gridSecond' ? s.gridChangeBtnActive : s.gridChangeBtn}
              onClick={onGridSecondClick}
            />
          </li>
        )}
      </MinTabletXl>
    </>
  );
};

export default ActionPageGrid;
