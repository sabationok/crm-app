import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

import s from './PageStatistics.module.scss';

const PageStatistics = props => {
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Звіти" iconId="list" actions="withFilter" filter />
      </section>

      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerLeft}>
          <Block title="Звіт" iconId="assignment-ok" actions="primary" />
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="Статистика" iconId="statistics" actions="primary" />
        </div>
      </section>
    </div>
  );
};

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageStatistics;
