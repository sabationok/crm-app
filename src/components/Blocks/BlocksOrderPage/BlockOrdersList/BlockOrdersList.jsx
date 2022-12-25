import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';

import { ordersMessages as messages } from 'data';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppPageSettings, getOrders } from 'redux/selectors';
import { ordersTableTitles } from 'data/ordersTableTitles';
import { prepeareOrderData } from 'data/orders';
import { actionDeleteOrder, actionArchiveOrder, actionAcceptOrder, actionDeclineOrder } from 'redux/orders/ordersActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './BlockOrdersList.module.scss';

const BlockOrdersList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { orders } = useSelector(getOrders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { NOT_SELECTED, Deleting, Archivating, Accepting, Declining } = messages;
  const selectedOrder = orders.find(el => el._id === id);

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
        toast.success(Deleting.success(id));
      },
      onError: () => {
        toast.error(Deleting.error(id));
      },
    };
    dispatch(actionDeleteOrder(payload));
  }

  function archivatingAction(id) {
    if (!id) {
      NOT_SELECTED();
      return;
    }
    const confirm = window.confirm(Archivating.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        navigate(`/orders`);
        toast.success(Archivating.success(id));
      },
      onError: () => {
        toast.error(Archivating.error(id));
      },
    };
    dispatch(actionArchiveOrder(payload));
  }

  function acceptingAction(id) {
    if (!id) {
      NOT_SELECTED();
      return;
    }
    const confirm = window.confirm(Accepting.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        navigate(`/orders`);
        toast.success(Accepting.success(id));
      },
      onError: () => {
        toast.error(Accepting.error(id));
      },
    };
    dispatch(actionAcceptOrder(payload));
  }

  function declinigAction(id) {
    if (!id) {
      NOT_SELECTED();
      return;
    }
    const confirm = window.confirm(Declining.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        navigate(`/orders`);
        toast.success(Declining.success(id));
      },
      onError: () => {
        toast.error(Declining.error(id));
      },
    };
    dispatch(actionDeclineOrder(payload));
  }

  const blockSettings = {
    className: s[pageGrid],
    order: selectedOrder,
    tableTitles: ordersTableTitles,
    tableData: orders,
    prepeareRowdata: prepeareOrderData,
    archiveOrderAction: archivatingAction,
    approveOrderAction: acceptingAction,
    rejectOrderAction: declinigAction,
    deleteAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockOrdersList;
