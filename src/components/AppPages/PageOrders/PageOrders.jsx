// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from '../AppGridPage/AppGridPage';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
import TableList from 'components/TableList/BlockTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllOrders } from 'redux/orders/ordersThunks';
// import { selectOrders } from 'redux/selectors';
// import {
//   actionChangeSearchQuery,
//   actionChangeSearchParam,
// } from 'redux/orders/ordersActions';

import { ordersTableTitles } from 'data/ordersTableTitles';

// import s from './PageOrders.module.scss';

const PageOrders = () => {
  // const { orders } = useSelector(selectOrders);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllOrders());
  // }, [dispatch]);
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={
          <Block title="Замовлення" iconId="list" tableTitles={ordersTableTitles} actions="withFilter" filter>
            <TableList />
          </Block>
        }
        elementBottomLeft={
          <Block title="Деталі" iconId="info" actions="primary">
            <FormPrimary formTitle="Деталі замовлення" />
          </Block>
        }
        elementBottomRight={
          <Block title="ТТН" iconId="ttn" actions="primary">
            <FormPrimary formTitle="ТТН до замовлення" />
            <FormPrimary formTitle="Рахунок до замовлення" />
          </Block>
        }
      />
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
