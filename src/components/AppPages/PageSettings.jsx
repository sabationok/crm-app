import React from 'react';
import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import Block from 'components/Block/Block';

// import s from './PageSettings.module.scss';

const PageSettings = props => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Налаштування" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Налаштування" iconId="person" actions="primary" />}
        elementBottomRight={<Block title="Налаштування" iconId="settings" actions="primary" />}
      />
    </>
  );
};

PageSettings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageSettings;
