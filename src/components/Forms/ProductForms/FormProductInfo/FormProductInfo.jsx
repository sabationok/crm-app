import React, { useState } from 'react';
import FormPrimary from '../../FormPrimary/FormPrimary';
import PrimaryInput from '../../Inputs/InputPrimary/PrimaryInput';

import s from './FormProductInfo.module.scss';

const FormProductInfo = ({ formTitle = 'Form title' }) => {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    console.log(formData);
  }
  function handleFormReset(ev) {
    setFormData(initialState);
  }
  return (
    <FormPrimary formTitle='Деталі товару' onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <div className={s.inputs}>
        <PrimaryInput label="Назва" placeholder="Назва" name="1" value={formData['1']} onChange={handleChangeInput} />
        <PrimaryInput label="SKU" placeholder="SKU" name="2" value={formData['2']} onChange={handleChangeInput} />
        <PrimaryInput label="Ціна" placeholder="Ціна" name="3" value={formData['3']} onChange={handleChangeInput} />
        <PrimaryInput
          label="Комісія"
          placeholder="Комісія"
          name="4"
          value={formData['4']}
          onChange={handleChangeInput}
        />
        <PrimaryInput
          label="Категорія"
          placeholder="Категорія"
          name="5"
          value={formData['5']}
          onChange={handleChangeInput}
        />
      </div>
    </FormPrimary>
  );
};

export default FormProductInfo;
