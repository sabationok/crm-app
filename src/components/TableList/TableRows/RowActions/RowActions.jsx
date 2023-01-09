import React, { useRef } from 'react';
import RowActionItem from './RowActionItem';
import { useRow } from '../RowContext';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './RowActions.module.scss';

const baseRoutes = {
  products: 'product',
  refunds: 'refund',
  orders: 'order',
};

const RowActions = () => {
  const { indexPage } = useSelector(getAppPageSettings);
  const { isActionsOpen, handleToggleActions, rowData } = useRow();
  const pathRef = useRef(`/${indexPage}/${rowData._id}/${baseRoutes[indexPage]}`);
  const linkRef = useRef(`${window.location.origin}/crm-app${pathRef.current}`);
  const navigate = useNavigate();

  function navigateById() {
    navigate(pathRef.current);
  }
  async function copyLink() {
    await navigator.clipboard.writeText(linkRef.current);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  async function handleShareBtnClick() {
    const shareData = {
      title: `Поділитись`,
      text: `Прошу переглянути`,
      url: linkRef.current,
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка: ${err}`);
    }
  }

  const rowActionArr = [
    { title: null, onClick: handleToggleActions, iconId: 'close' },
    { title: 'Поділитись', onClick: handleShareBtnClick, iconId: 'share' },
    { title: 'Посилання', onClick: copyLink, iconId: 'link' },
    { title: 'Показати деталі', onClick: navigateById, iconId: 'openInNew' },
  ];

  return (
    <div className={[isActionsOpen ? s.rowActionsVisible : s.rowActions, 'listRowActions'].join(' ')}>
      {rowActionArr.map(item => (
        <RowActionItem key={item.iconId} {...item} />
      ))}
    </div>
  );
};

export default RowActions;
