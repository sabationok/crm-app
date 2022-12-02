import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
// import s from './SelectCategory.module.scss';
const seletsArr = [
  { label: 'Секція', name: 'section', action: 'text' },
  { label: 'Категорія', name: 'parentCategory', action: 'text' },
  { label: 'Підкатегорія', name: 'category', action: 'text' },
];
const SelectCategory = () => {
  return (
    <Fieldset legend="Оберіть категорію">
      {seletsArr.map(input => (
        <PrimaryInput key={input.name} {...input} />
      ))}
    </Fieldset>
  );
};

export default SelectCategory;
