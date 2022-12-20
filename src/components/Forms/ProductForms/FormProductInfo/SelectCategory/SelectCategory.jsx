import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';
import SectionsList from './SectionsList/SectionsList';

import s from './SelectCategory.module.scss';

const seletsArr = [
  { label: 'Секція', name: 'section' }, // * sectionId: ''
  { label: 'Батьківська категорія', name: 'parentCategory' }, // * parentCategoryId: ''
  { label: 'Категорія', name: 'category' }, // * categoryId: ''
];

const SelectCategory = () => {
  const { formData, onChange } = useForm();

  return (
    <>
      <Fieldset legend="Оберіть категорію">
        {seletsArr.map(input => {
          return <PrimaryInput key={input.name} {...input} value={formData[input.name]} onChange={onChange} disabled />;
        })}
        <ModalOpenButton modalChildren={<SectionsList />} className={s.button}>
          Оберіть категорію
        </ModalOpenButton>
      </Fieldset>
    </>
  );
};

export default SelectCategory;
