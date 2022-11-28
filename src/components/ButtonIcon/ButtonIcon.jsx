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
  iconSize = '100%',
  className = '',
  title = '',
  styleType = 'PrimaryBtn',
  onClick = null,
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  // function handleBtnClick() {
  //   if (onClick) {
  //     onClick();
  //     return;
  //   }
  //   return;
  // }
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
      onClick={onClick && onClick}
    >
      <svg className={s.iconSvg} style={iconStyle}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
      {children}
    </button>
  );
};

export default ButtonIcon;
