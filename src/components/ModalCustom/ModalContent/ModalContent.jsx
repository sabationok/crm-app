import React, { useState } from 'react';
import ModalCustom from '../ModalCustom';

const ModalContent = ({ children, trigger, className, closeBtn = true, style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }

  let Trigger = trigger;
  return (
    <>
      {trigger && <Trigger onClick={toggleModal} />}
      {isModalOpen && (
        <ModalCustom handleToggle={toggleModal} style={style} defaultBtn={closeBtn} className={className}>
          {children}
        </ModalCustom>
      )}
    </>
  );
};

export default ModalContent;
