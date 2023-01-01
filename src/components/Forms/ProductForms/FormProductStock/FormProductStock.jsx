import React from 'react';

import TableDinamic from 'components/TableDinamic/TableDinamic';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

import s from './FormProductStock.module.scss';

const FormProductStock = ({ blockSettings }) => {
  return (
    <FormPrimary blockSettings={blockSettings} className={s.formStock}>
      <div className={s.formContainer}>
        <TableDinamic editable />
      </div>
    </FormPrimary>
  );
};

export default FormProductStock;
