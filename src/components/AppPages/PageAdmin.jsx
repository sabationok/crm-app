import React from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockAdmin, BlockManagers, BlockVendors, BlockAdminRules, BlockAdminSettings, BlockUsers } from 'components/Blocks';

const PageAdmin = ({ path }) => {
  const BlockAuthSet = { iconId: 'persons', title: 'Керування користувачами' };

  const blocksMap = {
    admin: <BlockAdmin />,
    managers: <BlockManagers />,
    vendors: <BlockVendors />,
    users: <BlockUsers {...BlockAuthSet} />,
    roles: <BlockAdminRules />,
    settings: <BlockAdminSettings />,
  };

  return (
    <>
      <PageProvider>
        <MinTabletXl>
          <BlockAdminSettings />
          <BlockAdmin />
          <BlockManagers />
          <BlockVendors />
          <BlockAdminRules />
          <BlockUsers {...BlockAuthSet} />
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
