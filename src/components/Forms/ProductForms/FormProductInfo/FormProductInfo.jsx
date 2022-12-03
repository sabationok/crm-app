// import { useBlock } from 'components/Block/BlockContext';
// import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import FormPrimary from '../../FormPrimary/FormPrimary';
import PriceField from './PriceField/PriceField';
import InputTextarea from 'components/Forms/Inputs/InputTextarea/InputTextarea';

import StaticInputs from './StaticInputs/StaticInputs';
import OptionalInputs from './OptionalInputs/OptionalInputs';

import SelectAvailibility from './SelectAvailibility/SelectAvailibility';
import SelectCategory from './SelectCategory/SelectCategory';

// import s from './FormProductInfo.module.scss';
// todo  { label: 'Видимість', name: 'visible', action: 'checkbox' },
// todo { label: 'Статус', name: 'rewiewStatus', action: 'semiAuto' },
const userInfo = {
  createdAt: '', // * date
  id: '21651asv165s1fv', // * string
  name: 'Valeria Baranovka', // * string
  type: 'manager', // * string
  email: 'valeria@mail.com', // * string
  phone: '+3806543218', // * string
  // !! only for VENDORS
  companyName: '', // * stringF
  brandsList: [], // * array of string
  mangerId: [], // * array of string
  // !! only for MANAGERS
  vendorslist: [], // * array of string
};

const initialState = {
  // ???!!! seting by server ????
  createdAt: '', // * date
  changedAt: '', // * date
  id: '', // * string
  // ? last author data who changed
  changedByAuthorId: '', // * string // * userInfo.id
  changedByAuthorName: '', // * string // * userInfo.id
  changedByAuthorType: '', // * string // * userInfo.id
  // ? author data who created
  authorId: '', // * string // * userInfo.id
  authorName: '', // * string // * userInfo.name
  authorType: '', // * string // * userInfo.type
  // ? seting by author manualy or by randomizator
  sku: '', // * string
  // ? seting by author
  name: '', // * string
  // ? brand name setting by author & id (supplayer)
  brand: '', // * string
  brandId: '', // * string
  parentCategoryId: '', // * string
  categoryId: '', // * string
  // ? availability
  availability: '', // * string
  // ?
  description: '', // * string
  // ? comment for manager/vendor/admin. Not for customer
  innerComment: '', // * string
  // ? aproved by manager, automaticaly to TRUE when manager as creator
  aprovedStatus: false, // * boolean
  // ? is visible for customer
  isVisible: false, // * boolean
  // ? Counting process on frontend and post prepeared data to the server
  cost: 0, // *number 0.00
  isCommission: false, // * boolean
  commission: 0, // *number 0.00
  currency: '', // * string
  price: 0, // *number 0.00
  // ? not required
  sale: 0, // *number 0.00
  cashbackId: 0, // *number 0.00
};
const incomeData = {
  createdAt: String(new Date()),
  changedAt: String(new Date()),
  sku: '321865168151',
  name: 'Сукня синя, шовкова',
  brand: 'Noverra',
  authorId: userInfo.id,
  authorName: userInfo.name,
  authorType: userInfo.type,
  aprovedStatus: false,
  isVisible: false,
  changedByAuthorId: '',
  changedByAuthorName: '',
  changedByAuthorType: '',
  availability: '',
  description: 'Description',
  innerComment: 'Comment',
  cost: 400,
  isCommission: false,
  commission: 5,
  cashbackId: 3,
  sale: 10,
  currency: 'UAH',
  price: 500,
};

const FormProductInfo = () => {
  const [formData, setFormData] = useState({ ...incomeData });

  function handleChangeFormState(dataObj) {
    setFormData({ ...formData, ...dataObj });

    console.log(dataObj);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();

    const submitData = {
      ...formData,
      createdAt: String(new Date()),
      changedAt: String(new Date()),
      changedByAuthorId: userInfo.id,
      changedByAuthorName: userInfo.name,
      changedByAuthorType: userInfo.type,
      authorId: userInfo.id,
      authorName: userInfo.name,
      authorType: userInfo.type,
    };

    console.log(submitData);
  }
  function handleFormReset(ev) {
    // setFormData(initialState);
  }

  return (
    <FormPrimary
      formTitle="Деталі товару"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      onFormStateChange={handleChangeFormState}
      onChange={handleChangeInput}
      formData={formData}
      {...formData}
      id='productForm'
    >
      <StaticInputs />

      <SelectCategory />

      <SelectAvailibility />

      <PriceField />

      <OptionalInputs />

      <InputTextarea label="Опис товару" value={formData?.description} name="description" onChange={handleChangeInput} />

      <InputTextarea label="Внутрішній коментар" value={formData?.innerComment} name="innerComment" onChange={handleChangeInput} />
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
