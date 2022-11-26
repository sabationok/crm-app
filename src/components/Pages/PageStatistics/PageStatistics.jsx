import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageStatistics.module.scss';

const PageStatistics = props => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Звіти" iconId="list" type="filtered"/>
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Звіт" iconId="assignment-ok"type="primary" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Статистика" iconId="statistics"type="primary" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageStatistics;
