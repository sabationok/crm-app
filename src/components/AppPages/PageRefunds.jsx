import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BlockRefundsList, BlockRefundInspect, BlockRefundInfo } from 'components/Blocks';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';
import { blocksSettings, blocksNames } from 'data';
import { useParams } from 'react-router-dom';
// import s from './PageRefunds.module.scss';

const PageRefunds = ({ path = 'refunds' }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const post = useSelector(getPostById(id));

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

    return () => {
      dispatch(actionSetPageGridChange(false));
    };
  }, [dispatch]);

  return (
    <>
      <MinTabletXl>
        <BlockRefundsList {...BlockRefundsListSet} />
        <BlockRefundInfo {...BlockRefundInfoSet} />
        <BlockRefundInspect {...BlockRefundInspectionSet} />
      </MinTabletXl>
      <MaxToTablet>{path ? blocksMap[path] : blocksMap.refunds}</MaxToTablet>
    </>
  );
};
PageRefunds.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageRefunds;
