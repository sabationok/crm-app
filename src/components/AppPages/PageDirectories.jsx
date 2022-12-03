import React from 'react';
import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import Block from 'components/Block/Block';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
const PageSettings = props => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Налаштування" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Налаштування" iconId="person" actions="primary" />}
        elementBottomRight={<Block title="Налаштування" iconId="settings" actions="primary" />}
      />{' '}
      <MinTabletXl>
        <Block title="Налаштування" iconId="list" actions="primary" />
        <Block title="Бренди" iconId="brand" actions="primary" />
        <Block title="Інше" iconId="info" actions="primary" />
        <Block title="Сповіщення" iconId="chat" actions="primary" />
      </MinTabletXl>
      <MaxToTablet>
        <Block title="Профіль" iconId="partners" actions="primary" />
      </MaxToTablet>
    </>
  );
};

PageSettings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageSettings;
