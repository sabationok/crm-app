import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { BlockRefundsList, BlockRefundInspect, BlockRefundInfo } from 'components/Blocks';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGridChange, actionSetPageObjData } from 'redux/page/pageActions';
import { blocksSettings, blocksNames } from 'data';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getRefundById } from 'redux/selectors';
// import s from './PageRefunds.module.scss';

const PageRefunds = ({ path = 'refunds' }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const refund = useSelector(getRefundById(id));

  const BlockRefundInfoSet = blocksSettings.find(el => el.name === blocksNames.BlockRefundInfo);
  const BlockRefundsListSet = blocksSettings.find(el => el.name === blocksNames.BlockRefundsList);
  const BlockRefundInspectionSet = blocksSettings.find(el => el.name === blocksNames.BlockRefundInspect);

  const blocksMap = {
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
          <BlockRefundsList {...BlockRefundsListSet} />
          <BlockRefundInfo {...BlockRefundInfoSet} />
          <BlockRefundInspect {...BlockRefundInspectionSet} />
        </MinTabletXl>
        <MaxToTablet>{path ? blocksMap[path] : blocksMap.refunds}</MaxToTablet>
      </PageProvider>
    </>
  );
};
PageRefunds.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageRefunds;
