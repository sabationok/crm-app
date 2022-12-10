import React from 'react';
import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';

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

  // const [searchParams, setSearchParams] = useSearchParams();

  // console.log(allSearchParams());
  // useEffect(() => {
  //   let arr = [];
  //   const allSearchParams = () => {
  //     searchParams.forEach((value, key) => {
  //       arr.push({ [key]: value });
  //     });
  //     return arr;
  //   };

  //   if (allSearchParams().length !== 0) {
  //     setSearchParams({ set: 'sdvsfv' });
  //   }
  // }, [searchParams, setSearchParams]);

  return (
    <>
      <MinTabletXl>
        <BlockAdmin />
        <BlockManagers />
        <BlockVendors />
        <BlockAdminRules />
        <BlockAdminSettings />
      </MinTabletXl>
      <MaxToTablet>{path ? blocksMap[path] : blocksMap.admin}</MaxToTablet>
    </>
  );
};

PageAdmin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAdmin;
