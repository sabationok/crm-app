import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { BlockRefundsList, BlockRefundInspect, BlockRefundInfo } from 'components/Blocks';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGridChange, actionSetPageObjData } from 'redux/page/pageActions';
import { blocksNames, getBlockSettings } from 'data';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getRefundById } from 'redux/selectors';
// import s from './PageRefunds.module.scss';

const PageRefunds = ({ path = 'refunds' }) => {
  const [BlockRefundInfoSet] = useState(getBlockSettings(blocksNames.RefundInfo));
  const [BlockRefundsListSet] = useState(getBlockSettings(blocksNames.RefundsList));
  const [BlockRefundInspectionSet] = useState(getBlockSettings(blocksNames.RefundInspect));
  const dispatch = useDispatch();
  const { id } = useParams();
  const refund = useSelector(getRefundById(id));

  const BlocksMap = {
    refunds: <BlockRefundsList {...BlockRefundsListSet} />,
    refund: <BlockRefundInfo {...BlockRefundInfoSet} />,
    inspection: <BlockRefundInspect {...BlockRefundInspectionSet} />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));
    if (!id) {
      return;
    } else if (!refund) {
      toast.error('За таким ID результатів не знайдено');
      return;
    }
    dispatch(actionSetPageObjData(refund));

    return () => {
      dispatch(actionSetPageGridChange(false));
      dispatch(actionSetPageObjData(null));
    };
  }, [dispatch, id, refund]);

  const ctx = {
    indexPath: path,
  };

  return (
    <>
      <PageProvider {...ctx}>
        <MinTabletXl>
          {BlocksMap.refunds}
          {BlocksMap.refund}
          {BlocksMap.inspection}
        </MinTabletXl>
        <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.refunds}</MaxToTablet>
      </PageProvider>
    </>
  );
};
PageRefunds.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageRefunds;
