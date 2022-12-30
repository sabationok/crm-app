import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SectionsList from './SectionsList/SectionsList';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

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
        <ModalContent
          className={s.modal}
          trigger={props => (
            <ButtonIcon {...props} className={s.button}>
              Обрати категорію
            </ButtonIcon>
          )}
        >
          <SectionsList />
        </ModalContent>
      </Fieldset>
    </>
  );
};

export default SelectCategory;
