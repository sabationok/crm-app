import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageAdmin.module.scss';

const PageAdmin = props => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Завдання" iconId="list" type="filtered" />
        </section>
        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerRight}>
            <Block title="Адмін" iconId="admin" type="primary" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Адмін" iconId="settings" type="primary" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
