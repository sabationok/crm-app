import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockOrdersList, BlockOrderInfo, BlockOrderTTN } from 'components/Blocks';
import { blocksNames, blocksSettings } from 'data';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from 'redux/selectors';
import { actionSetPageObjData } from 'redux/page/pageActions';
import { toast } from 'react-toastify';

const PageOrders = ({ path = 'orders' }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector(getOrderById(id));

  const BlockOrderInfoSet = blocksSettings.find(el => el.name === blocksNames.BlockOrderInfo);
  const BlockOrdersListSet = blocksSettings.find(el => el.name === blocksNames.BlockOrdersList);
  const BlockOrderDeliveriesSet = blocksSettings.find(el => el.name === blocksNames.BlockOrderDeliveries);

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
          <BlockOrdersList {...BlockOrdersListSet} />
          <BlockOrderInfo {...BlockOrderInfoSet} />
          <BlockOrderTTN {...BlockOrderDeliveriesSet} />
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
