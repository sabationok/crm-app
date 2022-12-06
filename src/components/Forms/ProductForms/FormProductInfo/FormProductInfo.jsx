// import { useBlock } from 'components/Block/BlockContext';
// import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { initialState } from './formData';

import FormPrimary from '../../FormPrimary/FormPrimary';
import PriceField from './PriceField/PriceField';
import InputTextarea from 'components/Forms/Inputs/InputTextarea/InputTextarea';

import StaticInputs from './StaticInputs/StaticInputs';
import OptionalInputs from './OptionalInputs/OptionalInputs';

import SelectAvailibility from './SelectAvailibility/SelectAvailibility';
import SelectCategory from './SelectCategory/SelectCategory';
// import { useBlock } from 'components/Block/BlockContext';

// import s from './FormProductInfo.module.scss';
// todo  { label: 'Видимість', name: 'visible', action: 'checkbox' },
// todo { label: 'Статус', name: 'rewiewStatus', action: 'semiAuto' },

const FormProductInfo = props => {
  const { user } = useSelector(selectUserData);
  const [formData, setFormData] = useState(initialState);

  function handleChangeFormState(dataObj) {
    setFormData({ ...formData, ...dataObj });

    // console.log(dataObj);
    console.log(formData);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleChangeCheckbox(ev){
    const { name, checked } = ev.target;
    setFormData({ ...formData, [name]: checked });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();

    const submitData = {
      ...formData,
      createdAt: String(new Date()),
      changedAt: String(new Date()),
      changedByAuthorId: user.id,
      changedByAuthorName: user.name,
      changedByAuthorType: user.type,
      authorId: user.id,
      authorName: user.name,
      authorType: user.type,
    };

    console.log(submitData);
    toast.info('Форму відправлено');
    setFormData(initialState);
  }
  function handleFormReset(ev) {
    setFormData(initialState);
    toast.info('Форму очищено');
  }
  function handleFormCancel(ev) {
    setFormData(initialState);
    toast.info('Форму очищено');
  }

  return (
    <FormPrimary
      formTitle="Деталі товару"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      onFormStateChange={handleChangeFormState}
      onChange={handleChangeInput}
      onChangeCheckbox={handleChangeCheckbox}
      onCancel={handleFormCancel}
      formData={formData}
      {...formData}
      id="productForm"
    >
      {/* <StaticInputs /> */}

      {/* <SelectCategory /> */}

      <SelectAvailibility />

      {/* <PriceField /> */}

      {/* <OptionalInputs /> */}

      {/* <InputTextarea label="Опис товару" value={formData?.description} name="description" onChange={handleChangeInput} /> */}

      {/* <InputTextarea label="Внутрішній коментар" value={formData?.innerComment} name="innerComment" onChange={handleChangeInput} /> */}
    </FormPrimary>
  );
};

export default FormProductInfo;

// const product = {
//   createdAt: '2022-10-31T10:51:57.449Z',
//   name: 'Recycled Granite Cheese',
//   authorName: '',
//   authorId: '',
//   authorType: '',
//   price: '',
//   commision: '',
//   currency: '',
//   section: 'section 1',
//   parentCategory: 'parentCategory 1',
//   category: 'category 1',
//   stock: 66,
//   manufacturingTime: 52,
//   availbability: 'availbability 1',
//   lookItems: [],
//   description: 'description 1',
//   cashbackId: 'cashbackId 1',
//   sku: 'sku 1',
//   imgsList: [],
//   updatedAt: 1667264565,
//   selcted: false,
//   rewiewStatus: 'rewiewStatus 1',
//   visible: false,
//   шьпі: [],
//   id: '1',
// };
