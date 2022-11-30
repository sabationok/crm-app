// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppGridPage from '../AppGridPage/AppGridPage';
import { BlockOrdersList, BlockOrderInfo, BlockOrderTTN } from 'components/Blocks/OrderBlocks';
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
        bigerSideLeft
        elementTop={<BlockOrdersList tableTitles={ordersTableTitles} />}
        elementBottomLeft={<BlockOrderInfo />}
        elementBottomRight={<BlockOrderTTN />}
      />
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
