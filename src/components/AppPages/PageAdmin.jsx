import React from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockAdmin, BlockManagers, BlockVendors, BlockAdminRules, BlockAdminSettings } from 'components/Blocks/AdminBlocks';

const PageAdmin = props => {
  return (
    <>
      <MinTabletXl>
        <BlockAdmin />
        <BlockManagers />
        <BlockVendors />
        <BlockAdminRules />
        <BlockAdminSettings />
      </MinTabletXl>
      <MaxToTablet>
        <BlockAdmin />
      </MaxToTablet>
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
