import React from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockAdmin, BlockManagers, BlockVendors, BlockAdminRules, BlockAdminSettings } from 'components/Blocks/BlocksMap';
// import { useEffect } from 'react';

const PageAdmin = ({ path }) => {
  const blocksMap = {
    admin: <BlockAdmin />,
    managers: <BlockManagers />,
    vendors: <BlockVendors />,
    roles: <BlockAdminRules />,
    settings: <BlockAdminSettings />,
  };

  return (
    <>
      <PageProvider>
        <MinTabletXl>
          <BlockAdmin />
          <BlockManagers />
          <BlockVendors />
          <BlockAdminRules />
          <BlockAdminSettings />
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
