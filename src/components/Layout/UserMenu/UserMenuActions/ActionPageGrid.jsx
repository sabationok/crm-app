import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGrid } from 'redux/page/pageActions';
import { getAppPage } from 'redux/selectors';

import s from './UserMenuActions.module.scss';

const ActionPageGrid = () => {
  const [activeGrid, setActiveGrid] = useState(true);
  const dispatch = useDispatch();
  const { pageGridChange } = useSelector(getAppPage);

  function onGridFirstClick() {
    dispatch(actionSetPageGrid('gridFirst'));
    setActiveGrid(true);
  }
  function onGridSecondClick() {
    dispatch(actionSetPageGrid('gridSecond'));
    setActiveGrid(false);
  }

  return (
    <>
      <MinTabletXl>
        {pageGridChange && (
          <li className={s.actionItemDbl}>
            <ButtonIcon iconId="pageGrid-1" className={!activeGrid ? s.gridChangeBtn : s.gridChangeBtnActive} onClick={onGridFirstClick} />
            <ButtonIcon iconId="pageGrid-2" className={activeGrid ? s.gridChangeBtn : s.gridChangeBtnActive} onClick={onGridSecondClick} />
          </li>
        )}
      </MinTabletXl>
    </>
  );
};

export default ActionPageGrid;
