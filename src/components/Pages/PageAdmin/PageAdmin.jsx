import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

import s from './PageAdmin.module.scss';

const PageAdmin = props => {
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Завдання" iconId="list" actions="withFilter" filter />
      </section>
      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerRight}>
          <Block title="Адмін" iconId="admin" actions="primary" />
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="Адмін" iconId="settings" actions="primary" />
        </div>
      </section>
    </div>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
