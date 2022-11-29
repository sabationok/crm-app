import React from 'react';
import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from '../AppGridPage/AppGridPage';

// import s from './PageStatistics.module.scss';

const PageStatistics = props => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Звіти" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Звіт" iconId="assignment-ok" actions="primary" />}
        elementBottomRight={<Block title="Статистика" iconId="statistics" actions="primary" />}
      />
    </>
  );
};

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageStatistics;
