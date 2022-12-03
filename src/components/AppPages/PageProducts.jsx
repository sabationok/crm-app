import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks/ProductBlocks';

const PageProducts = ({ path, ...props }) => {
  return (
    <>
      <MinTabletXl>
        <BlockProductsList /> <BlockProductInfo /> <BlockProductStock />
      </MinTabletXl>
      <MaxToTablet>
        <BlockProductsList />
      </MaxToTablet>
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
