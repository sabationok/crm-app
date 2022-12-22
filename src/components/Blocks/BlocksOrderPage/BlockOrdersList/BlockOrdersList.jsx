import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';

import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getAppPageSettings, getOrders } from 'redux/selectors';
import { ordersTableTitles } from 'data/ordersTableTitles';

import s from './BlockOrdersList.module.scss';
const BlockOrderList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { orders } = useSelector(getOrders);
  // const { id } = useParams();

  const blockSettings = {
    title: 'Список замовлень',
    iconId: 'list',
    actions: 'withFilter',
    className: s[pageGrid],
    tableTitles: ordersTableTitles,
    tableData: [...orders],
    order: {},
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <TableList />{' '}
    </Block>
  );
};

export default BlockOrderList;
