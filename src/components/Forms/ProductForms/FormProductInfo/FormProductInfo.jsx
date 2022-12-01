import { useBlock } from 'components/Block/BlockContext';
import React, { useState } from 'react';
import FormPrimary from '../../FormPrimary/FormPrimary';
import PrimaryInput from '../../Inputs/InputPrimary/PrimaryInput';

import s from './FormProductInfo.module.scss';
// const inputs = [{}];
const FormProductInfo = ({ formTitle = 'Form title' }) => {
  const { isFormDisabled } = useBlock();
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
    <FormPrimary formTitle="Деталі товару" onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <div className={s.inputs}>
        <PrimaryInput label="Назва" disabled={isFormDisabled} placeholder="Назва" name="1" onChange={handleChangeInput} />
        <PrimaryInput label="SKU" disabled={isFormDisabled} placeholder="SKU" name="2" onChange={handleChangeInput} />
        <PrimaryInput label="Ціна" disabled={isFormDisabled} placeholder="Ціна" name="3" onChange={handleChangeInput} />
        <PrimaryInput label="Комісія" disabled={isFormDisabled} placeholder="Комісія" name="4" onChange={handleChangeInput} />
        <PrimaryInput label="Категорія" disabled={isFormDisabled} placeholder="Категорія" name="5" onChange={handleChangeInput} />
      </div>
    </FormPrimary>
  );
};

export default FormProductInfo;
