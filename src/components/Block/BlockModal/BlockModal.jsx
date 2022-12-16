import React, { useEffect } from 'react';
import { useBlock } from '../BlockContext';

import s from './BlockModal.module.scss';
const BlockModal = ({ title }) => {
  const { iconId, isModalOpen, handleToggleModal } = useBlock();

  function onBackdropClick(ev) {
    const { target, currentTarget } = ev;
    if (target !== currentTarget) {
      return;
    }
    handleToggleModal();
  }

  useEffect(() => {
    function handleCloseModalByEscape(ev) {
      console.log('first');
      let { code } = ev;
      if (code === 'Escape') {
        handleToggleModal();
        window.removeEventListener('keydown', handleCloseModalByEscape);
        return;
      }
      return;
    }
    if (!isModalOpen) {
      window.removeEventListener('keydown', handleCloseModalByEscape);
      return;
    } else if (isModalOpen) {
      window.addEventListener('keydown', handleCloseModalByEscape);
      return;
    }
    return () => {
      window.removeEventListener('keydown', handleCloseModalByEscape);
    };
  }, [handleToggleModal, isModalOpen]);

  return (
    <div className={isModalOpen ? s.BackdropOpen : s.Backdrop} onClick={onBackdropClick}>
      <div className={s.Container}>
        <span className={s.Title}>{title}</span>
        <div className={s.actionsList} id={`${iconId}-modal`}></div>
      </div>
    </div>
  );
};

export default BlockModal;
