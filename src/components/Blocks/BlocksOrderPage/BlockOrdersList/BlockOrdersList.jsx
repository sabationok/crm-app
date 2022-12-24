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
import { ordersMessages as messages } from 'data';

import s from './BlockOrdersList.module.scss';
import { toast } from 'react-toastify';

const BlockOrderList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { orders } = useSelector(getOrders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { id } = useParams();
  const { NOT_SELECTED, Deleting, Archivating, Accepting, Declining } = messages;

  function deleteAction(id) {
    if (!id) {
      NOT_SELECTED();
      return;
    }
    const confirm = window.confirm(Deleting.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        navigate(`/orders`);
        toast.successDeleting.success(id)();
      },
      onError: () => {
        toast.error(Deleting.error(id));
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
