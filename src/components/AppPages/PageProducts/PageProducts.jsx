import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from '../AppGridPage/AppGridPage';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';

// import s from './PageProducts.module.scss';

const PageProducts = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Список товарів" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={
          <Block title="Деталі" iconId="info" actions="primary">
            <FormProductInfo />
            <FormProductImgs />
          </Block>
        }
        elementBottomRight={
          <Block title="Склад" iconId="storage" actions="primary">
            <FormProductStock />
          </Block>
        }
      />
    </>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
