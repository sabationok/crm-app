import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BlockRefundsList, BlockRefundInspect, BlockRefundInfo } from 'components/Blocks/BlocksMap';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';
// import s from './PageRefunds.module.scss';

const PageRefunds = ({ path = 'refunds' }) => {
  const dispatch = useDispatch();

  const blocksMap = {
    refunds: <BlockRefundsList />,
    refund: <BlockRefundInfo />,
    inspection: <BlockRefundInspect />,
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
        <BlockRefundsList />
        <BlockRefundInfo />
        <BlockRefundInspect />
      </MinTabletXl>
      <MaxToTablet>{path ? blocksMap[path] : blocksMap.refunds}</MaxToTablet>
    </>
  );
};
PageRefunds.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageRefunds;
