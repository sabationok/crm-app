import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo';
import { PageProvider } from 'contexts/PageContext';

import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Список повернень" iconId="list" actions="withFilter" filter />
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Деталі" iconId="return" actions="primary">
              <FormProductInfo formTitle="Form Return Info" />
            </Block>
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Інспекція" iconId="inspect" actions="primary">
            <FormProductInfo formTitle="Form Inspection" />
            </Block>
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageReturns;
