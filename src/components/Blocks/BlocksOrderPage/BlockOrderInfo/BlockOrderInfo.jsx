import React from 'react';
import Block from 'components/Block/Block';

import s from './BlockOrderInfo.module.scss';
import Actions from './Actions/Actions';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppPageSettings } from 'redux/selectors';
import { actionDeleteOrder } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';

const ordersMessages = {
  NOT_SELECTED_ORDER: `Не обрано жодного замовлення`,
  DELETE_CONFIRM: id => `Бажаєте видалити замолення №${id} ?`,
  DELETE_DECLINE: id => `Видалення замовлення №${id} скасовано`,
  DELETE_SUCCESS: id => `Замовлення №${id} видаелно`,
  DELETE_ERROR: id => `Видалення замовлення №${id} невдале`,
};
const BlockOrderInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  function deleteAction() {
    const { NOT_SELECTED_ORDER, DELETE_CONFIRM, DELETE_DECLINE, DELETE_SUCCESS, DELETE_ERROR } = ordersMessages;
    if (!id) {
      toast.error(NOT_SELECTED_ORDER);
      return;
    }
    const confirm = window.confirm(DELETE_CONFIRM(id));
    if (!confirm) {
      toast.info(DELETE_DECLINE(id));
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(DELETE_SUCCESS(id));
        navigate(`/orders`);
      },
      onError: () => {
        toast.error(DELETE_ERROR(id));
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
