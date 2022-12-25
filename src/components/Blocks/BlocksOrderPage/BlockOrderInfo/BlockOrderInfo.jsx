import React from 'react';
import Block from 'components/Block/Block';

import Actions from './Actions/Actions';
import TableOrderInfo from 'components/TableOrderInfo/TableOrderInfo';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppPageSettings, getOrders } from 'redux/selectors';
import { actionDeleteOrder } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';
import { ordersMessages as messages } from 'data';

import s from './BlockOrderInfo.module.scss';

const BlockOrderInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { orders } = useSelector(getOrders);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedOrder = orders.find(order => order._id === id);

  function deleteOrderAction(id) {
    const { Deleting } = messages;
    if (!id) {
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
      },
      onError: () => {},
    };
    dispatch(actionDeleteOrder(payload));
  }

  const blockSettings = {
    title: 'Деталі замовлення',
    iconId: 'assignment-in',
    actions: 'primary',
    className: s[pageGrid],
    deleteAction: deleteOrderAction,
    ActionsComp: Actions,
    order: selectedOrder,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {selectedOrder?._id && <TableOrderInfo />}

      {!selectedOrder?._id && <BlockEmpty title={'Оберіть замовлення'} />}
    </Block>
  );
};

export default BlockOrderInfo;
