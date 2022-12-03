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
  iconSize = '18px',
  iconClassName = '',
  title = '',
  styleType = 'PrimaryBtn',
  onClick = null,
  ...props
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  const iconClassNames = [s.iconSvg, iconClassName].join(' ');

  let style = {
    width: size,
    height: size,
    minWidth: size,
    ...styles,
  };
  let iconStyle = {
    width: iconSize,
    height: iconSize,
    minWidth: iconSize,
    ...iconStyles,
  };
  return (
    <button type={type} className={classNames} disabled={disabled} style={style} title={title && title} onClick={onClick} {...props}>
      <svg className={iconClassNames} style={iconStyle}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
      {children}
    </button>
  );
};

export default ButtonIcon;
