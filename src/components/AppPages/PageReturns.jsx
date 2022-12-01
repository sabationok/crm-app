import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import { BlockReturnsList, BlockReturnInfo, BlockReturnInspection } from 'components/Blocks/ReturnBlocks';

// import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        bigerSideLeft
        elementTop={<BlockReturnsList />}
        elementBottomLeft={<BlockReturnInfo />}
        elementBottomRight={<BlockReturnInspection />}
      />
    </>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageReturns;
