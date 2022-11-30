import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from '../AppGridPage/AppGridPage';

// import s from './PageAdmin.module.scss';

const PageAdmin = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Завдання" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Адмін" iconId="admin" actions="primary" />}
        elementBottomRight={<Block title="Адмін" iconId="settings" actions="primary" />}
      />
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
