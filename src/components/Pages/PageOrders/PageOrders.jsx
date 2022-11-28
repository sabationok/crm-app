// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllOrders } from 'redux/orders/ordersThunks';
// import { selectOrders } from 'redux/selectors';
// import {
//   actionChangeSearchQuery,
//   actionChangeSearchParam,
// } from 'redux/orders/ordersActions';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
import TableList from 'components/TableList/BlockTable';

import { ordersTableTitles } from 'data/ordersTableTitles';

import s from './PageOrders.module.scss';

const PageOrders = () => {
  // const { orders } = useSelector(selectOrders);

  // const dispatch = useDispatch();
  // const blockParams = {
  //   blockFilter: true,
  //   blockTable: true,
  //   pageSelector: selectOrders,
  // };
  // const blockFilterParams = {
  //   tableTitles: ordersTableTitles,
  //   searchQueryAction: actionChangeSearchQuery,
  //   searchParamAction: actionChangeSearchParam,
  // };
  // const blockTableParams = {
  //   tableTitles: ordersTableTitles,
  //   tableData: orders,
  // };

  // useEffect(() => {
  //   dispatch(fetchAllOrders());
  // }, [dispatch]);
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Замовлення" iconId="list" tableTitles={ordersTableTitles} actions="withFilter" filter>
          <TableList />
        </Block>
      </section>

      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerLeft}>
          <Block title="Деталі" iconId="info" actions="primary">
            <FormPrimary formTitle="Деталі замовлення" />
          </Block>
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="ТТН" iconId="ttn" actions="primary">
          <FormPrimary formTitle="ТТН до замовлення" />
          <FormPrimary formTitle="Рахунок до замовлення" />
          </Block>
        </div>
      </section>
    </div>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
