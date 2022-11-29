import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

import s from './PageCounterParty.module.scss';

const PageCounterParty = props => {
  return (
    <div className={s.pageFlex}>
      <section className={s.sectionTopFlex}>
        <Block blockFilter title="Контрагенти" iconId="list" actions="withFilter" filter />
      </section>

      <section className={s.sectionBottomFlex}>
        <div className={s.sectionInnerLeft}>
          <Block title="Інформація" iconId="person" actions="primary" />
        </div>
        <div className={s.sectionInnerRight}>
          <Block title="Налаштування" iconId="settings" actions="primary" />
        </div>
      </section>
    </div>
  );
};

PageCounterParty.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageCounterParty;
