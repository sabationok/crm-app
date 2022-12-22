import React from 'react';
import Block from 'components/Block/Block';

import s from './BlockOrderInfo.module.scss';
import Actions from './Actions/Actions';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getAppPageSettings } from 'redux/selectors';
const BlockOrderInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    title: 'Деталі',
    iconId: 'assignment-ok',
    actions: 'primary',
    className: s[pageGrid],
    ActionsComp: Actions,
    order: {},
    ...props,
  };

  return <Block {...blockSettings}></Block>;
};

export default BlockOrderInfo;
