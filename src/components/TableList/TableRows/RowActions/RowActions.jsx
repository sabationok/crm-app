import React from 'react';
import { useRow } from '../RowContext';
import { useBlock } from 'components/Block/BlockContext';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { postStatus } from 'data/products';
import { orderStatus } from 'data/orders';
import { toast } from 'react-toastify';

import s from './RowActions.module.scss';

const RowActions = ({ className }) => {
  const { isActionsOpen, handleActionsOpen, rowData } = useRow();
  const { deleteAction, togglePostVisibility, approvePostAction, rejectPostAction, rejectOrderAction, archiveOrderAction, approveOrderAction } =
    useBlock();

  const disableApprovePostBtn = rowData?.approvedStatus === postStatus.ACCEPTED;
  const disableRejectPostBtn = rowData?.approvedStatus === postStatus.REJECTED;

  const disableArchiveOrderBtn = rowData?.orderStatus === orderStatus.ARCHIVED;
  const disableApproveOrderBtn = rowData?.orderStatus === orderStatus.ACCEPTED;
  const disableRejectOrderBtn = rowData?.orderStatus === orderStatus.REJECTED;

  function handleDeleteAction() {
    deleteAction ? deleteAction(rowData._id) : toast.error('deleteAction');
  }
  function handletogglePostVisibility() {
    togglePostVisibility ? togglePostVisibility(rowData._id) : toast.error('togglePostVisibility');
  }
  function handlePostApprove() {
    approvePostAction ? approvePostAction(rowData._id) : toast.error('approvePostAction');
  }
  function handlePostReject() {
    rejectPostAction ? rejectPostAction(rowData._id) : toast.error('rejectPostAction');
  }
  function handleOrderApprove() {
    approveOrderAction ? approveOrderAction(rowData._id) : toast.error('approveOrderAction');
  }
  function handleOrderReject() {
    rejectOrderAction ? rejectOrderAction(rowData._id) : toast.error('rejectOrderAction');
  }
  function handleOrderArchive() {
    archiveOrderAction ? archiveOrderAction(rowData._id) : toast.error('archiveOrderAction');
  }
  return (
    <div className={[isActionsOpen ? s.rowActionsVisible : s.rowActions, 'listRowActions'].join(' ')}>
      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId={'close'} className={s.actionsBtn} onClick={handleActionsOpen} />
      </div>

      {deleteAction && (
        <div className={s.listItem}>
          <ButtonIcon size="100%" iconSize="80%" iconId="delete" className={s.actionsBtn} onClick={handleDeleteAction} />
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
            onClick={handletogglePostVisibility}
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
            onClick={handlePostApprove}
          />{' '}
          <span className={s.actionTitle}>Затвердити</span>
        </div>
      )}
      {rejectPostAction && (
        <div className={s.listItem}>
          <ButtonIcon size="100%" iconSize="80%" iconId="clear" className={s.actionsBtn} disabled={disableRejectPostBtn} onClick={handlePostReject} />{' '}
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
            onClick={handleOrderApprove}
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
            onClick={handleOrderReject}
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
            onClick={handleOrderArchive}
          />{' '}
          <span className={s.actionTitle}>Архівувати</span>
        </div>
      )}

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="share" className={s.actionsBtn} /> <span className={s.actionTitle}>Поділитись</span>
      </div>

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="link" className={s.actionsBtn} /> <span className={s.actionTitle}>Посилання</span>
      </div>
    </div>
  );
};

export default RowActions;
