import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useRow } from '../RowContext';
import { useBlock } from 'components/Block/BlockContext';
import { postStatus } from 'data/products';
import { orderStatus } from 'data/orders';

import s from './RowActions.module.scss';

const RowActions = () => {
  const { isActionsOpen, handleActionsOpen, rowData } = useRow();
  const { deleteAction, togglePostVisibility, approvePostAction, rejectPostAction, rejectOrderAction, archiveOrderAction, approveOrderAction } =
    useBlock();

  const disableApprovePostBtn = rowData?.approvedStatus === postStatus.ACCEPTED;
  const disableRejectPostBtn = rowData?.approvedStatus === postStatus.REJECTED;

  const disableArchiveOrderBtn = rowData?.orderStatus === orderStatus.ARCHIVED;
  const disableApproveOrderBtn = rowData?.orderStatus === orderStatus.ACCEPTED;
  const disableRejectOrderBtn = rowData?.orderStatus === orderStatus.REJECTED;

  return (
    <div className={[isActionsOpen ? s.rowActionsVisible : s.rowActions, 'listRowActions'].join(' ')}>
      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="close" className={s.actionsBtn} onClick={handleActionsOpen} />
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
        <ButtonIcon size="100%" iconSize="80%" iconId="share" className={s.actionsBtn} /> <span className={s.actionTitle}>Поділитись</span>
      </div>

      <div className={s.listItem}>
        <ButtonIcon size="100%" iconSize="80%" iconId="link" className={s.actionsBtn} /> <span className={s.actionTitle}>Посилання</span>
      </div>
    </div>
  );
};

export default RowActions;
