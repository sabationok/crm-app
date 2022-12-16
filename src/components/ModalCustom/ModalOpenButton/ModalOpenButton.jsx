import React, { useState } from 'react';
import ModalCustom from 'components/ModalCustom/ModalCustom';

import s from './ModalOpenButton.module.scss';

const ModalOpenButton = ({ children, modalChildren, className, defaultBtn = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <button className={[s.button, className].join(' ')} type="button" onClick={toggleModal}>
        {children}
      </button>
      {isModalOpen && (
        <ModalCustom handleToggle={toggleModal} defaultBtn={defaultBtn}>
          {modalChildren}
        </ModalCustom>
      )}
    </>
  );
};

export default ModalOpenButton;
