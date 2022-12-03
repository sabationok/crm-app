import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

const PageAdmin = props => {
  return (
    <>
      <MinTabletXl>
        <Block title="Адмін." iconId="admin" actions="withFilter" filter style={{ gridColumn: '1/6' }} />
        <Block title="Адмін" iconId="admin" actions="primary" style={{ gridColumn: '1/3' }} />
        <Block title="Налаштування" iconId="settings" actions="primary" style={{ gridColumn: '3/6' }} />
      </MinTabletXl>
      <MaxToTablet>
        <Block title="Адмін ліст" iconId="admin" actions="withFilter" filter style={{ gridColumn: '1/6' }} />
      </MaxToTablet>
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
