import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPageGridChange, actionSetPageObjData } from 'redux/page/pageActions';
import { blocksSettings, blocksNames } from 'data';
import { useParams } from 'react-router-dom';
import { getPostById } from 'redux/selectors';
import { toast } from 'react-toastify';

const PageProducts = ({ path = 'products', ...props }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(getPostById(id));

  const BlockProductInfoSet = blocksSettings.find(el => el.name === blocksNames.BlockProductInfo);
  const BlockProductsListSet = blocksSettings.find(el => el.name === blocksNames.BlockProductsList);
  const BlockProductStockSet = blocksSettings.find(el => el.name === blocksNames.BlockProductStock);

  const blocksMap = {
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
          <BlockProductsList {...BlockProductsListSet} />
          <BlockProductInfo {...BlockProductInfoSet} />
          <BlockProductStock {...BlockProductStockSet} />
        </MinTabletXl>
        <MaxToTablet>{path ? blocksMap[path] : blocksMap.admin}</MaxToTablet>
      </PageProvider>
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
