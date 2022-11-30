import React from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
// import

import s from './AppGridPage.module.scss';

const AppGridPage = ({
  pageGrid_5_5 = false,
  pageGrid_6_5 = false,
  elementTop = <></>,
  elementBottomLeft = <></>,
  elementBottomRight = <></>,
  bigerSideLeft = false,
}) => {
  const pageGridClassNames = [pageGrid_5_5 ? s.pageGrid_5_5 : '', pageGrid_6_5 ? s.pageGrid_6_5 : ''].join(' ');
  const bottomLeftClassNames = [s.BottomLeft, bigerSideLeft ? s.big : s.small].join(' ');
  const bottomRightClassNames = [s.BottomRight, bigerSideLeft ? s.small : s.big].join(' ');
  return (
    <MinTabletXl>
      <div className={pageGridClassNames}>
        <div className={s.Top}>{elementTop}</div>
        <div className={bottomLeftClassNames}>{elementBottomLeft}</div>
        <div className={bottomRightClassNames}>{elementBottomRight}</div>
      </div>
    </MinTabletXl>
  );
};

AppGridPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppGridPage;
