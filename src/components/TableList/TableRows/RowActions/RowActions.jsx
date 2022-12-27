import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useRow } from '../RowContext';
import { useBlock } from 'components/Block/BlockContext';
import { postStatus } from 'data/products';
import { orderStatus } from 'data/orders';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

import s from './RowActions.module.scss';
import { toast } from 'react-toastify';
const baseRoutes = {
  products: 'product',
  refunds: 'refund',
  orders: 'order',
};
const RowActions = () => {
  const { indexPage } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const { isActionsOpen, handleToggleActions, rowData } = useRow();
  const { deleteAction, togglePostVisibility, approvePostAction, rejectPostAction, rejectOrderAction, archiveOrderAction, approveOrderAction } =
    useBlock();
  const path = `/${indexPage}/${rowData._id}/${baseRoutes[indexPage]}`;
  let LINK = `${window.location.origin}/crm-app${path}`;

  const disableApprovePostBtn = rowData?.approvedStatus === postStatus.ACCEPTED;
  const disableRejectPostBtn = rowData?.approvedStatus === postStatus.REJECTED;

  const disableArchiveOrderBtn = rowData?.orderStatus === orderStatus.ARCHIVED;
  const disableApproveOrderBtn = rowData?.orderStatus === orderStatus.ACCEPTED;
  const disableRejectOrderBtn = rowData?.orderStatus === orderStatus.REJECTED;

  function navigateById() {
    navigate(path);
  }
  async function copyLink() {
    await navigator.clipboard.writeText(LINK);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  async function handleShareBtnClick() {
    const shareData = {
      title: `Поділитись`,
      text: `Прошу переглянути`,
      url: LINK,
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка: ${err}`);
    }
  }
  return (
    <div className={[isActionsOpen ? s.rowActionsVisible : s.rowActions, 'listRowActions'].join(' ')}>
      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="close" className={s.actionsBtn} onClick={handleToggleActions} />
      </div>

      {deleteAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="delete"
            className={s.actionsBtn}
            onClick={() => {
              deleteAction(rowData._id);
            }}
          />
          <span className={s.actionTitle}>Видалити</span>
        </div>
      )}

      {togglePostVisibility && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId={rowData?.visibilityStatus ? 'visibility-on' : 'visibility-off'}
            className={s.actionsBtn}
            onClick={() => {
              togglePostVisibility(rowData._id);
            }}
          />
          <span className={s.actionTitle}>Змінити видимість</span>
        </div>
      )}

      {approvePostAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="success"
            className={s.actionsBtn}
            disabled={disableApprovePostBtn}
            onClick={() => {
              approvePostAction(rowData._id);
            }}
          />
          <span className={s.actionTitle}>Затвердити</span>
        </div>
      )}
      {rejectPostAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="clear"
            className={s.actionsBtn}
            disabled={disableRejectPostBtn}
            onClick={() => {
              rejectPostAction(rowData._id);
            }}
          />{' '}
          <span className={s.actionTitle}>Відхилити</span>
        </div>
      )}

      {approveOrderAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="success"
            className={s.actionsBtn}
            disabled={disableApproveOrderBtn}
            onClick={() => {
              approveOrderAction(rowData._id);
            }}
          />{' '}
          <span className={s.actionTitle}>Прийняти</span>
        </div>
      )}
      {rejectOrderAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="clear"
            className={s.actionsBtn}
            disabled={disableRejectOrderBtn}
            onClick={() => {
              rejectOrderAction(rowData._id);
            }}
          />{' '}
          <span className={s.actionTitle}>Відхилити</span>
        </div>
      )}
      {archiveOrderAction && (
        <div className={s.listItem}>
          <ButtonIcon
            size="100%"
            iconSize="80%"
            iconId="archive"
            className={s.actionsBtn}
            disabled={disableArchiveOrderBtn}
            onClick={() => {
              archiveOrderAction(rowData._id);
            }}
          />{' '}
          <span className={s.actionTitle}>Архівувати</span>
        </div>
      )}

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="share" className={s.actionsBtn} onClick={handleShareBtnClick} />
        <span className={s.actionTitle}>Поділитись</span>
      </div>

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="link" className={s.actionsBtn} onClick={copyLink} />
        <span className={s.actionTitle}>Посилання</span>
      </div>

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="dblArrowRight" className={s.actionsBtn} onClick={navigateById} />
        <span className={s.actionTitle}>Перейти</span>
      </div>
    </div>
  );
};

export default RowActions;
