import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockOrdersList, BlockOrderInfo, BlockOrderTTN } from 'components/Blocks/OrderBlocks';
// import s from './PageOrders.module.scss';

const PageOrders = props => {
  return (
    <>
      <MinTabletXl>
        <BlockOrdersList /> <BlockOrderInfo /> <BlockOrderTTN />
      </MinTabletXl>
      <MaxToTablet>
        <BlockOrdersList />
      </MaxToTablet>
    </>
  );
};

PageOrders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageOrders;
