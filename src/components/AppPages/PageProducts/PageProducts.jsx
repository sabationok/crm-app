import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import AppGridPage from '../AppGridPage/AppGridPage';

import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks/ProductBlocks';

const PageProducts = () => {
  return (
    <>
      <AppGridPage pageGrid_5_5 elementTop={<BlockProductsList />} elementBottomLeft={<BlockProductInfo />} elementBottomRight={<BlockProductStock />} />
      <Outlet />
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
