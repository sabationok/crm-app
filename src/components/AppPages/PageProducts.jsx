import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGridChange, actionSetPageObjData } from 'redux/page/pageActions';
import { getBlockSettings, blocksNames } from 'data';
import { useParams } from 'react-router-dom';
import { getPostById } from 'redux/selectors';
import { toast } from 'react-toastify';

const PageProducts = ({ path = 'products', ...props }) => {
  const [BlockProductsListSet] = useState(getBlockSettings(blocksNames.ProductsList));
  const [BlockProductInfoSet] = useState(getBlockSettings(blocksNames.ProductInfo));
  const [BlockProductStockSet] = useState(getBlockSettings(blocksNames.ProductStock));
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(getPostById(id));

  const BlocksMap = {
    products: <BlockProductsList {...BlockProductsListSet} />,
    product: <BlockProductInfo {...BlockProductInfoSet} />,
    stock: <BlockProductStock {...BlockProductStockSet} />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));
    if (!id) {
      return;
    } else if (!post) {
      toast.error('За таким ID результатів не знайдено');
      return;
    }
    dispatch(actionSetPageObjData(post));

    return () => {
      dispatch(actionSetPageGridChange(false));
      dispatch(actionSetPageObjData(null));
    };
  }, [dispatch, post, id]);

  const ctx = {
    indexPath: path,
  };

  return (
    <>
      <PageProvider {...ctx}>
        <MinTabletXl>
          {BlocksMap.products}
          {BlocksMap.product}
          {BlocksMap.stock}
        </MinTabletXl>
        <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.products}</MaxToTablet>
      </PageProvider>
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
