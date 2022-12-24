import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockOrdersList, BlockOrderInfo, BlockOrderRealizations } from 'components/Blocks/BlocksMap';
// import s from './PageOrders.module.scss';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';

const PageOrders = ({ path = 'orders' }) => {
  const dispatch = useDispatch();
  const blocksMap = {
    orders: <BlockOrdersList />,
    order: <BlockOrderInfo />,
    realizations: <BlockOrderRealizations />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));

    return () => {
      dispatch(actionSetPageGridChange(false));
    };
  }, [dispatch]);

  return (
    <>
      <MinTabletXl>
        <BlockOrdersList />
        <BlockOrderInfo />
        <BlockOrderRealizations />
      </MinTabletXl>
      <MaxToTablet>{path ? blocksMap[path] : blocksMap.orders}</MaxToTablet>
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
