import React, { useState } from 'react';
import ModalCustom from '../ModalCustom';

const ModalOpenTrigger = ({ children, trigger, className, modalContent, style, defaultBtn = true, modalStyle, disabled = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModalByLink(ev) {
    ev.preventDefault();
    setIsModalOpen(!isModalOpen);
  }
  function toggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }

  const styles = {
    ...style,
    pointerEvents: disabled ? 'none' : 'all',
  };
  let Trigger = trigger;
  return (
    <>
      {!trigger && (
        <a className={className} onClick={toggleModalByLink} href="/open-modal" style={styles}>
          {children}
        </a>
      )}
      {trigger && <Trigger onClick={toggleModalByLink} />}
      {isModalOpen && (
        <ModalCustom handleToggle={toggleModal} modalStyle={modalStyle} defaultBtn={defaultBtn}>
          {modalContent}
        </ModalCustom>
      )}
    </>
  );
};

export default ModalOpenTrigger;
