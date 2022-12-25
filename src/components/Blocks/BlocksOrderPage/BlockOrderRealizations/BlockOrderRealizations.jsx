import React from 'react';
import Block from 'components/Block/Block';

import Actions from './Actions/Actions';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import TableOrderRealiazations from 'components/TableOrderDeliveries/TableOrderDeliveries';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockOrderRealizations.module.scss';

const BlockOrderRealizations = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { id } = useParams();
  const { orders } = useSelector(getOrders);

  const selectedOrder = orders.find(order => order._id === id);

  const blockSettings = {
    title: 'Реалізації',
    iconId: 'assignment-ok',
    actions: 'primary',
    className: s[pageGrid],
    ActionsComp: Actions,
    order: selectedOrder,
    ...props,
  };

  return <Block {...blockSettings}>{selectedOrder ? <TableOrderRealiazations /> : <BlockEmpty title={'Оберіть замовлення'} />}</Block>;
};

export default BlockOrderRealizations;
