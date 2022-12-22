import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks/BlocksMap';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';

const PageProducts = ({ path = 'products', ...props }) => {
  const dispatch = useDispatch();

  const blocksMap = {
    products: <BlockProductsList />,
    product: <BlockProductInfo />,
    stock: <BlockProductStock />,
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
        <BlockProductsList />
        <BlockProductInfo />
        <BlockProductStock />
      </MinTabletXl>
      <MaxToTablet>{path ? blocksMap[path] : blocksMap.admin}</MaxToTablet>
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
