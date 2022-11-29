import React from 'react';
import s from './FontIcon.module.scss';
const FontIcon = ({ iconId = 'plus-circle', style, size = '', iconSize = '', iconClass = '' }) => {
  const styles = {
    ...style,
    fontSize: iconSize,
    width: size,
    height: size,
  };
  const iconClassArr = [`icon-${iconId}`, s.icon, s[iconClass]].join(' ');
  return <span className={iconClassArr} style={styles}></span>;
};

export default FontIcon;
