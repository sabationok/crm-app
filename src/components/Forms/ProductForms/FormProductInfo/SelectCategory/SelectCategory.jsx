import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import Fieldset from 'components/Forms/Fieldset/Fieldset';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SectionsList from './SectionsList/SectionsList';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

import s from './SelectCategory.module.scss';

const selectsArr = [
  { label: 'Секція', name: 'sectionName' }, // * sectionId: ''
  { label: 'Батьківська категорія', name: 'ownerName' }, // * parentCategoryId: ''
  { label: 'Категорія', name: 'name' }, // * categoryId: ''
];

const SelectCategory = () => {
  const { formData, onChange } = useForm();

  return (
    <>
      <Fieldset legend="Оберіть категорію">
        {selectsArr.map(input => {
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
