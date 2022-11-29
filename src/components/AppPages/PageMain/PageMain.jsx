import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

import s from './PageMain.module.scss';

const PageMain = () => {
  return (
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
  );
};

PageMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageMain;
