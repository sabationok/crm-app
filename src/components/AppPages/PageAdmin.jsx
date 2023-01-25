import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageProvider from './PageProvider';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockAdmin, BlockManagers, BlockVendors, BlockAdminRules, BlockAdminSettings, BlockUsers } from 'components/Blocks';
import { blocksNames, getBlockSettings } from 'data';

const PageAdmin = ({ path }) => {
  const [BlockUsersSet] = useState(getBlockSettings(blocksNames.AdminUsers));
  const [BlockRulesSet] = useState(getBlockSettings(blocksNames.AdminRules));

  const BlocksMap = {
    users: <BlockUsers {...BlockUsersSet} />,
    roles: <BlockAdminRules {...BlockRulesSet} />,
    admin: <BlockAdmin />,
    managers: <BlockManagers />,
    vendors: <BlockVendors />,
    settings: <BlockAdminSettings />,
  };

  return (
    <>
      <PageProvider>
        <MinTabletXl>
          {BlocksMap.users}
          {BlocksMap.roles}
          {BlocksMap.admin}
          {BlocksMap.managers}
          {BlocksMap.vendors}
          {BlocksMap.settings}
        </MinTabletXl>
        <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.admin}</MaxToTablet>
      </PageProvider>
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
