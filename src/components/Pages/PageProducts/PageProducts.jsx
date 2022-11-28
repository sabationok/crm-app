import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';

import s from './PageProducts.module.scss';

const PageProducts = () => {
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Список товарів" iconId="list" actions="withFilter" filter />
      </section>
      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerLeft}>
          <Block title="Деталі" iconId="info" actions="primary">
            <FormProductInfo formTitle="Form Product Info" />
            <FormProductImgs />
          </Block>
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="Склад" iconId="storage" actions="primary">
            <FormProductStock />
          </Block>
        </div>
      </section>
    </div>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
