import React from 'react';
import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import { BlockRaportsList, BlockRaportInfo, BlockStatistics } from 'components/Blocks/RaportBlocks';

// import s from './PageStatistics.module.scss';

const PageStatistics = props => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        {...props}
        elementTop={<BlockRaportsList />}
        elementBottomLeft={<BlockRaportInfo />}
        elementBottomRight={<BlockStatistics />}
      />
    </>
  );
};

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageStatistics;
