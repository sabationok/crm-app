import PropTypes from 'prop-types';
import { BlockReturnsList, BlockReturnInfo, BlockReturnInspection } from 'components/Blocks/ReturnBlocks';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
// import s from './PageReturns.module.scss';

const PageReturns = props => {
  return (
    <>
      <MinTabletXl>
        <BlockReturnsList /> <BlockReturnInfo /> <BlockReturnInspection />
      </MinTabletXl>
      <MaxToTablet>
        <BlockReturnsList />
      </MaxToTablet>
    </>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageReturns;
