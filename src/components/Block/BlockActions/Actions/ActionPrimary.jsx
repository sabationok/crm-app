import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import s from './Action.module.scss';

const ActionPrimary = ({ status = true, size = '40px', iconId = 'close', title = 'title', onClick }) => {
  const { isDarkTheme } = useSelector(getAppSettings);
  return (
    <>
      <div className={[s.listItem, isDarkTheme && s.dark].join(' ')}>
        <ButtonIcon iconId={iconId} iconSize="80%" size={size} className={s.actionBtn} onClick={onClick} disabled={!status} title={title} />
        <span className={s.actionTitle}>{title}</span>
      </div>
    </>
  );
};

export default ActionPrimary;
