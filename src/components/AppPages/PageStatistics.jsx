import React from 'react';
import PropTypes from 'prop-types';
import { BlockRaportsList, BlockRaportInfo, BlockStatistics } from 'components/Blocks/BlocksMap';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

const PageStatistics = props => {
  return (
    <>
      <MinTabletXl>
        <BlockRaportsList />
        <BlockRaportInfo />
        <BlockStatistics />
      </MinTabletXl>
      <MaxToTablet>
        <BlockRaportsList />
      </MaxToTablet>
    </>
  );
};

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageStatistics;
