import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';

import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getAppPageSettings, getOrders } from 'redux/selectors';
import { ordersTableTitles } from 'data/ordersTableTitles';
import { prepeareOrderData } from 'data/orders';
import { actionDeleteOrder as actionDelete } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';
import { ordersMessages as deleteMessages } from '../ordersMessages';

import s from './BlockOrdersList.module.scss';

const BlockOrderList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { orders } = useSelector(getOrders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { id } = useParams();

  function deleteAction(id) {
    const { NOT_SELECTED_ID, DELETE_CONFIRM, DELETE_DECLINE, DELETE_SUCCESS, DELETE_ERROR } = deleteMessages;
    if (!id) {
      NOT_SELECTED_ID();
      return;
    }
    const confirm = window.confirm(DELETE_CONFIRM(id));
    if (!confirm) {
      DELETE_DECLINE(id);
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        DELETE_SUCCESS(id);
        navigate(`/orders`);
      },
      onError: () => {
        DELETE_ERROR(id);
      },
    };
    dispatch(actionDelete(payload));
  }
  const blockSettings = {
    title: 'Список замовлень',
    iconId: 'list',
    actions: 'withFilter',
    className: s[pageGrid],
    prepeareRowdata: prepeareOrderData,
    tableTitles: ordersTableTitles,
    tableData: orders,
    deleteAction,
    order: {},
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockOrderList;
