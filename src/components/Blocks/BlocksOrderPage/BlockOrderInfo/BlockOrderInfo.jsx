import React from 'react';
import Block from 'components/Block/Block';

import TableOrderInfo from 'components/TableOrderInfo/TableOrderInfo';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAppPageSettings, getPageObjData } from 'redux/selectors';
import { actionDeleteOrder } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';
import { ordersMessages as messages } from 'data';
import { usePage } from 'components/AppPages/PageProvider';

import s from './BlockOrderInfo.module.scss';

const BlockOrderInfo = props => {
  const order = useSelector(getPageObjData);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    className: s[pageGrid],
    deleteAction: deleteOrderAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {order?._id && <TableOrderInfo />}

      {!order?._id && <BlockEmpty title={'Оберіть замовлення'} />}
    </Block>
  );
};

export default BlockOrderInfo;
