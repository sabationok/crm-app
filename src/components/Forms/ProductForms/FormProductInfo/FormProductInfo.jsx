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

const FormProductInfo = () => {
  const initialState = {
    createdAt: String(new Date()),
    sku: '321865168151',
    name: 'Сукня синя, шовкова',
    brand: 'Noverra',
    authorId: '0217',
    authorName: 'Noverra Inc.',
    description: 'sdfbsdfbsdf',
    innerComment: 'sfdfbgr sd d',
    cost: 523,
  };
  const [formData, setFormData] = useState(initialState);
  const [priceData, setPriceData] = useState({ isCommission: true });
  const [isVisible, setIsVisible] = useState(true);

  function handleChangePriceState(dataObj) {
    setPriceData({ ...priceData, ...dataObj });
  }
  function handleToggleVisibilityState(dataObj) {
    setIsVisible(!isVisible);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleChangeFormState(dataObj) {
    setFormData({ ...formData, ...dataObj });

    console.log(dataObj);
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();

    const submitData = {
      changedAt: String(new Date()),
      isVisible,
      ...formData,
      ...priceData,
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
      onChange={handleChangeFormState}
      formData={formData}
      onPriceChange={handleChangePriceState}
      priceData={priceData}
      toggleVisibility={handleToggleVisibilityState}
      isVisible
    >
      <StaticInputs />

      <SelectCategory />

      <SelectAvailibility />

      <PriceField />

      <OptionalInputs />

      <InputTextarea label="Опис товару" defaultValue={formData?.description} name="description" onChange={handleChangeInput} />

      <InputTextarea label="Внутрішній коментар" defaultValue={formData?.innerComment} name="innerComment" onChange={handleChangeInput} />
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
