import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

// import s from './SelectAvailibility.module.scss';
const SelectAvailibility = () => {
  const { onChange, formData } = useForm();
  return (
    <>
      <PrimaryInput label="Наявність" name="availability" value={formData['availability']} onChange={onChange} />
      <PrimaryInput
        label="Термін виготовлення, дні"
        name="productionTime"
        value={formData['productionTime']}
        type="number"
        min="1"
        max="31"
        placeholder="1-31"
        onChange={onChange}
      />
    </>
  );
};

export default SelectAvailibility;
