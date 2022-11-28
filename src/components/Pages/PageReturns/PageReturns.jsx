import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Список повернень" iconId="list" actions="withFilter" filter />
      </section>

      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerLeft}>
          <Block title="Деталі" iconId="return" actions="primary">
            <FormPrimary formTitle="Деталі повернення" />
          </Block>
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="Інспекція" iconId="inspect" actions="primary">
            <FormPrimary formTitle="Інспекція повернення" />
          </Block>
        </div>
      </section>
    </div>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageReturns;
