import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
// import s from './SelectCategory.module.scss';
const seletsArr = [
  { label: 'Секція', name: 'section', action: 'text' },
  { label: 'Категорія', name: 'parentCategory', action: 'text' },
  { label: 'Підкатегорія', name: 'category', action: 'text' },
];
const SelectCategory = () => {
  const { onChange, formData } = useForm();
  // const { onFormStateChange, onChange, formData } = useForm();
  return (
    <Fieldset legend="Оберіть категорію">
      {seletsArr.map(input => (
        <PrimaryInput key={input.name} {...input} value={formData[input.name]} onChange={onChange} />
      ))}
    </Fieldset>
  );
};

export default SelectCategory;
