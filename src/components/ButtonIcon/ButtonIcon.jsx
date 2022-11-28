import React from 'react';
import sprite from 'img/sprite';
import s from './ButtonIcon.module.scss';

const ButtonIcon = ({
  children,
  type = 'button',
  disabled = false,
  iconId = '',
  styles = {},
  iconStyles = {},
  size = '',
  className = '',
  iconSize = '',
  iconClassName = '',
  title = '',
  styleType = 'PrimaryBtn',
  onClick = null,
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  const iconClassNames=[s.iconSvg, iconClassName].join(' ');

  let style = {
    width: size,
    height: size,
    ...styles,
  };
  let iconStyle = {
    width: iconSize,
    height: iconSize,
    ...iconStyles,
  };
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      style={style}
      title={title && title}
      onClick={onClick}
    >
      <svg className={iconClassNames} style={iconStyle}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
      {children}
    </button>
  );
};

export default ButtonIcon;
