import React from 'react';
import Block from 'components/Block/Block';

import Actions from './Actions/Actions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getOrders } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockOrdeInvoices.module.scss';

const BlockOrdeInvoices = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const { id } = useParams();
  // const { orders } = useSelector(getOrders);
  // const selectedOrder = posts.find(order => order._id === id);

  const blockSettings = {
    title: 'Інвойси',
    iconId: 'assignment',
    actions: 'primary',
    className: s[pageGrid],
    ActionsComp: Actions,
    order: {},
    ...props,
  };

  return <Block {...blockSettings}>{id}</Block>;
};

export default BlockOrdeInvoices;
