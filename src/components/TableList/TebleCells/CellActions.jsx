import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useRow } from '../TableRows/RowContext';
import { useBlock } from 'components/Block/BlockContext';

import s from './TableCells.module.scss';
import { toast } from 'react-toastify';

const CellActions = ({ title, idx, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteAction, togglePostVisibility, approvePostAction, rejectPostAction } = useBlock();
  const { rowData } = useRow();
  const classNames = [s.actions, className].join(' ');
  const disabledApproveBtn = rowData?.approvedStatus === 'success';
  const disabledRejectBtn = rowData?.approvedStatus === 'rejected';

  function handleIsopen() {
    setIsOpen(!isOpen);
  }

  function handleDeleteAction() {
    deleteAction ? deleteAction(rowData._id) : toast.error('deleteAction');
  }
  function handletogglePostVisibility() {
    togglePostVisibility ? togglePostVisibility(rowData._id) : toast.error('togglePostVisibility');
  }
  function handleApprove() {
    approvePostAction ? approvePostAction(rowData._id) : toast.error('approvePostAction');
  }
  function handleReject() {
    rejectPostAction ? rejectPostAction(rowData._id) : toast.error('rejectPostAction');
  }

  return (
    <>
      <div className={isOpen ? s.rowActionsVisible : s.rowActions}>
        {deleteAction && (
          <div className={s.listItem}>
            <ButtonIcon size="40px" iconSize="24px" iconId="delete" className={s.actionsBtn} onClick={handleDeleteAction} />
            <span className={s.actionTitle}>Видалити</span>
          </div>
        )}

        {togglePostVisibility && (
          <div className={s.listItem}>
            <ButtonIcon
              size="40px"
              iconSize="24px"
              iconId={rowData?.visibilityStatus ? 'visibility-on' : 'visibility-off'}
              className={s.actionsBtn}
              onClick={handletogglePostVisibility}
            />
            <span className={s.actionTitle}>Змінити видимість</span>
          </div>
        )}

        {approvePostAction && (
          <div className={s.listItem}>
            <ButtonIcon size="40px" iconSize="24px" iconId="success" className={s.actionsBtn} disabled={disabledApproveBtn} onClick={handleApprove} />{' '}
            <span className={s.actionTitle}>Затвердити</span>
          </div>
        )}

        {rejectPostAction && (
          <div className={s.listItem}>
            <ButtonIcon size="40px" iconSize="24px" iconId="clear" className={s.actionsBtn} disabled={disabledRejectBtn} onClick={handleReject} />{' '}
            <span className={s.actionTitle}>Відхилити</span>
          </div>
        )}

        <div className={s.listItem}>
          <ButtonIcon size="40px" iconSize="24px" iconId="share" className={s.actionsBtn} /> <span className={s.actionTitle}>Поділитись</span>
        </div>

        <div className={s.listItem}>
          <ButtonIcon size="40px" iconSize="24px" iconId="link" className={s.actionsBtn} /> <span className={s.actionTitle}>Посилання</span>
        </div>
      </div>

      <div className={classNames}>
        <ButtonIcon size="100%" iconSize="24px" iconId={isOpen ? 'close' : 'actions-h'} className={s.actionsBtn} onClick={handleIsopen} />
      </div>
    </>
  );
};

export default CellActions;
