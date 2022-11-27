import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageSettings.module.scss';

const PageSettings = props => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Налаштування" iconId="list" actions="withFilter" filter/>
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Налаштування" iconId="person" actions="primary" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Налаштування" iconId="settings" actions="primary" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageSettings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageSettings;
