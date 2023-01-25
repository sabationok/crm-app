import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockOrdersList, BlockOrderInfo, BlockOrderTTN } from 'components/Blocks';
import { blocksNames, getBlockSettings } from 'data';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from 'redux/selectors';
import { actionSetPageObjData } from 'redux/page/pageActions';
import { toast } from 'react-toastify';

const PageOrders = ({ path = 'orders' }) => {
  const [BlockOrdersListSet] = useState(getBlockSettings(blocksNames.OrderInfo));
  const [BlockOrderInfoSet] = useState(getBlockSettings(blocksNames.OrdersList));
  const [BlockOrderDeliveriesSet] = useState(getBlockSettings(blocksNames.OrderDeliveries));
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector(getOrderById(id));

  const BlocksMap = {
    orders: <BlockOrdersList {...BlockOrdersListSet} />,
    order: <BlockOrderInfo {...BlockOrderInfoSet} />,
    deliveries: <BlockOrderTTN {...BlockOrderDeliveriesSet} />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));
    if (!id) {
      return;
    } else if (!order) {
      toast.error('За таким ID результатів не знайдено');
      return;
    }
    dispatch(actionSetPageObjData(order));

    return () => {
      dispatch(actionSetPageGridChange(false));
      dispatch(actionSetPageObjData(null));
    };
  }, [dispatch, order, id]);

  const ctx = {
    indexPath: path,
  };

  return (
    <>
      <PageProvider {...ctx}>
        <MinTabletXl>
          {BlocksMap.orders}
          {BlocksMap.order}
          {BlocksMap.deliveries}
        </MinTabletXl>
        <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.orders}</MaxToTablet>
      </PageProvider>
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
