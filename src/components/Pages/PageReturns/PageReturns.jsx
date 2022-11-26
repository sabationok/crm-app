import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Список повернень" iconId="list"type="filtered" />
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Деталі" iconId="return" type="primary"/>
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Інспекція" iconId="inspect"type="primary" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageReturns;
