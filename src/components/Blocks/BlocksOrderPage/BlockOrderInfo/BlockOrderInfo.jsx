import React from 'react';
import Block from 'components/Block/Block';

import s from './BlockOrderInfo.module.scss';
import Actions from './Actions/Actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppPageSettings } from 'redux/selectors';
import { actionDeleteOrder } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';
import { ordersMessages as deleteMessages } from '../ordersMessages';

const BlockOrderInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
    dispatch(actionDeleteOrder(payload));
  }

  const blockSettings = {
    title: 'Деталі',
    iconId: 'assignment-ok',
    actions: 'primary',
    className: s[pageGrid],
    ActionsComp: Actions,
    deleteAction,
    order: {},
    ...props,
  };

  return <Block {...blockSettings}>{id}</Block>;
};

export default BlockOrderInfo;
