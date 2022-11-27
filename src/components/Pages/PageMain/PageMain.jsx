import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageMain.module.scss';

const PageMain = () => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Список завдань" iconId="list" actions="withFilter" filter />
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Деталі завдання" iconId="info" actions="primary" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Сповіщення" iconId="chat" actions="primary" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageMain;
