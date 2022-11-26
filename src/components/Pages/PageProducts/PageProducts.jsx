import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageProducts.module.scss';

const PageProducts = () => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Список товарів" iconId="list" type="filtered"/>
        </section>
        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Деталі" iconId="info"type="primary" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Склад" iconId="storage" type="primary"/>
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageProducts.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageProducts;
