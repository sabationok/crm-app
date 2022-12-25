import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockOrdersList, BlockOrderInfo, BlockOrderRealizations, BlockOrderTTN } from 'components/Blocks/BlocksMap';
import { blocksNames, blocksSettings } from 'data';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from 'redux/selectors';

// import s from './PageOrders.module.scss';

const PageOrders = ({ path = 'orders' }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector(getOrderById(id));
  const BlockOrderInfoSet = blocksSettings.find(el => el.name === blocksNames.BlockOrderInfo);
  const BlockOrdersListSet = blocksSettings.find(el => el.name === blocksNames.BlockOrdersList);
  const BlockOrderDeliveriesSet = blocksSettings.find(el => el.name === blocksNames.BlockOrderDeliveries);

  const blocksMap = {
    orders: <BlockOrdersList {...BlockOrdersListSet} />,
    order: <BlockOrderInfo {...BlockOrderInfoSet} />,
    realizations: <BlockOrderRealizations {...BlockOrderDeliveriesSet} />,
    deliveries: <BlockOrderTTN {...BlockOrderDeliveriesSet} />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));

    return () => {
      dispatch(actionSetPageGridChange(false));
    };
  }, [dispatch]);

  return (
    <>
      {' '}
      <PageProvider indexPath={path} order={order}>
        <MinTabletXl>
          <BlockOrdersList {...BlockOrdersListSet} />
          <BlockOrderInfo {...BlockOrderInfoSet} />
          <BlockOrderTTN {...BlockOrderDeliveriesSet} />
        </MinTabletXl>
        <MaxToTablet>{path ? blocksMap[path] : blocksMap.orders}</MaxToTablet>{' '}
      </PageProvider>
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
