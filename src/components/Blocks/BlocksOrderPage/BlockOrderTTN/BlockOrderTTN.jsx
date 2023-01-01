import React from 'react';
import Block from 'components/Block/Block';
import TableOrderDeliveries from 'components/TableOrderDeliveries/TableOrderDeliveries';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector } from 'react-redux';
import { getAppPageSettings, getPageObjData } from 'redux/selectors';

import s from './BlockOrderTTN.module.scss';

const BlockOrderTTN = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const order = useSelector(getPageObjData);

  const blockSettings = {
    className: s[pageGrid],
    ...props,
  };

  return <Block {...blockSettings}>{order?._id ? <TableOrderDeliveries /> : <BlockEmpty title={'Оберіть замовлення'} />}</Block>;
};

export default BlockOrderTTN;
