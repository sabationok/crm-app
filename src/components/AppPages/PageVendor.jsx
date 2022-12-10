import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockProfile, BlockBrands, BlockChat } from 'components/Blocks/BlocksMap';
const PageVendor = props => {
  return (
    <>
      {' '}
      <MinTabletXl>
        <BlockProfile />
        <BlockBrands />
        <BlockChat />
      </MinTabletXl>
      <MaxToTablet>
        <BlockProfile />
      </MaxToTablet>
    </>
  );
};

PageVendor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageVendor;
