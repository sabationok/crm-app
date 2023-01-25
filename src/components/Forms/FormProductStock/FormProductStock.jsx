import React from 'react';

import TableDinamic from 'components/TableDinamic/TableDinamic';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
import { useModal } from 'components/ModalCustom/ModalCustom';

import s from './FormProductStock.module.scss';

const FormProductStock = ({ blockSettings }) => {
  const { handleToggleModal } = useModal();

  return (
    <FormPrimary
      blockSettings={blockSettings}
      className={s.formStock}
      onCancel={handleToggleModal}
      onSubmit={ev => {
        ev.preventDefault();
        handleToggleModal();
      }}
    >
      <div className={s.formContainer}>
        <TableDinamic editable />
      </div>
    </FormPrimary>
  );
};

export default FormProductStock;
