import React, { useState, useEffect } from 'react';
// import { useBlock } from 'components/Block/BlockContext';
// import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';
import { initialState } from '../../../../data/productsFormData';
import { useModal } from 'components/ModalCustom/ModalCustom';

import FormPrimary from '../../FormPrimary/FormPrimary';
import PriceField from './PriceField/PriceField';
import InputTextarea from 'components/Forms/Inputs/InputTextarea/InputTextarea';

import StaticInputs from './StaticInputs/StaticInputs';
import OptionalInputs from './OptionalInputs/OptionalInputs';

import SelectAvailibility from './SelectAvailibility/SelectAvailibility';
import SelectCategory from './SelectCategory/SelectCategory';
// import { useBlock } from 'components/Block/BlockContext';

import { useDispatch } from 'react-redux';
import { fetchAddPost } from 'redux/posts/postsThunks';

// import s from './FormProductInfo.module.scss';

const FormProductInfo = ({ edit = false, create = false, copy = false }) => {
  const { user } = useSelector(getUserData);
  const { handleToggleModal } = useModal();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function handleChangeFormState(dataObj) {
    setFormData({ ...formData, ...dataObj });
    // console.log(dataObj);
    console.log(formData);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleChangeCheckbox(ev) {
    const { name, checked } = ev.target;
    setFormData({ ...formData, [name]: checked });
  }
  function handleAvailabilityChange(ev) {
    const { name } = ev.target;

    setFormData({ ...formData, availability: name });
  }
  function handleOrderTypeChange(ev) {
    const { name, checked } = ev.target;

    setFormData({ ...formData, [name]: checked });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();

    const submitData = {
      ...formData,
      changedByAuthorId: user.id || '',
      changedByAuthorName: user.name || '',
      changedByAuthorType: user.type || '',
      authorId: user.id || '',
      authorName: user.name || '',
      authorType: user.type || '',
    };
    console.log(submitData);

    const onSuccess = () => {
      toast.success('Форму відправлено');
    };
    const onError = () => {
      toast.error('Форму не відправлено');
    };

    dispatch(fetchAddPost({ submitData, onSuccess, onError }));
    setFormData(initialState);
  }
  function handleFormReset(ev) {
    setFormData(initialState);
    toast.info('Форму очищено');
  }
  function handleFormCancel(ev) {
    handleToggleModal();
  }

  useEffect(() => {
    if (edit) {
      console.log(edit, 'edit form');
      return;
    }
    if (create) {
      setFormData(initialState);
      console.log(create, 'create form');
      return;
    }
    if (copy) {
      console.log(copy, 'copy form');
      return;
    }
  }, [create, edit, copy]);

  return (
    <FormPrimary
      formTitle="Деталі товару"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      onFormStateChange={handleChangeFormState}
      onChange={handleChangeInput}
      onChangeCheckbox={handleChangeCheckbox}
      onAvailabilityChange={handleAvailabilityChange}
      onOrderTypeChange={handleOrderTypeChange}
      onCancel={handleFormCancel}
      formData={formData}
      {...formData}
      id="productForm"
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
