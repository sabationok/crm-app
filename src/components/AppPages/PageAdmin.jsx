import React from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockAdmin, BlockManagers, BlockVendors, BlockAdminRules, BlockAdminSettings } from 'components/Blocks';
import BlockAuth from 'components/Blocks/BlocksAdmin/BlockAuth/BlockAuth';

const PageAdmin = ({ path }) => {
  const BlockAuthSet = { signUp: true, admin: true, title: 'Керування користувачами' };
  const blocksMap = {
    admin: <BlockAdmin />,
    managers: <BlockManagers />,
    vendors: <BlockVendors />,
    users: <BlockAuth {...BlockAuthSet} />,
    roles: <BlockAdminRules />,
    settings: <BlockAdminSettings />,
  };

  return (
    <>
      <PageProvider>
        <MinTabletXl>
          {/* <BlockAdmin />
          <BlockManagers />
          <BlockVendors />
          <BlockAdminRules />
          <BlockAdminSettings /> */}
          <BlockAuth {...BlockAuthSet} />
        </MinTabletXl>
        <MaxToTablet>{path ? blocksMap[path] : blocksMap.admin}</MaxToTablet>
      </PageProvider>
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
