import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from '../AppGridPage/AppGridPage';

// import s from './PageCounterParty.module.scss';

const PageCounterParty = props => {
  return (
    <>
      <AppGridPage
        pageGrid_6_5
        elementTop={<Block title="Контрагенти" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Контрагент" iconId="person" actions="primary" />}
        elementBottomRight={<Block title="Налаштування" iconId="settings" actions="primary" />}
      />
    </>
  );
};

PageCounterParty.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageCounterParty;
