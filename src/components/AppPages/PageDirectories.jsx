import React from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockDirectories } from 'components/Blocks';
// import { blocksNames, blocksSettings } from 'data';

const PageSettings = ({ path = 'directories' }) => {
  const BlocksMap = {
    directories: <BlockDirectories />,
  };

  return (
    <>
      <MinTabletXl>
        <BlockDirectories />
      </MinTabletXl>
      <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.directories}</MaxToTablet>
    </>
  );
};

PageSettings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageSettings;
