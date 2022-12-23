import React, { useState, useEffect } from 'react';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
// import { getUserData } from 'redux/selectors';
import { initialState } from '../../../../data/productsFormData';
import { useModal } from 'components/ModalCustom/ModalCustom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddPost, fetchEditPost } from 'redux/posts/postsThunks';
import { getPosts } from 'redux/selectors';

import FormPrimary from '../../FormPrimary/FormPrimary';
import PriceField from './PriceField/PriceField';
import InputTextarea from 'components/Forms/Inputs/InputTextarea/InputTextarea';
import StaticInputs from './StaticInputs/StaticInputs';
import OptionalInputs from './OptionalInputs/OptionalInputs';
import SelectAvailibility from './SelectAvailibility/SelectAvailibility';
import SelectCategory from './SelectCategory/SelectCategory';

// import s from './FormProductInfo.module.scss';

const FormProductInfo = ({ edit = false, create = false, copy = false, id }) => {
  // const { user } = useSelector(getUserData);
  const { prepareRowData, prepareSubmitData } = useBlock();
  const { posts } = useSelector(getPosts);
  const { handleToggleModal } = useModal();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function handleChangeFormState(dataObj) {
    setFormData({ ...formData, ...dataObj });
    console.log(formData);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
    console.log({ [name]: value });
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

    const submitData = prepareSubmitData(formData);

    console.log(submitData);

    const onSuccess = () => {
      toast.success('Форму відправлено');
    };
    const onError = () => {
      toast.error('Форму не відправлено');
    };

    if (edit && id) {
      dispatch(fetchEditPost({ submitData, onSuccess, onError }));
      return;
    }
    if (create || (copy && id)) {
      dispatch(fetchAddPost({ submitData, onSuccess, onError }));
      return;
    }
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
    if (edit && id) {
      const selectedPost = posts.find(post => post?._id === id);

      const newData = prepareRowData(selectedPost);

      setFormData(newData);
      return;
    }
    if (create) {
      setFormData(initialState);

      console.log(create, 'create form');

      return;
    }
    if (copy && id) {
      const selectedPost = posts.find(post => post?._id === id);

      const newData = prepareRowData(selectedPost);

      setFormData(newData);
      return;
    }
  }, [create, edit, copy, posts, id, prepareRowData]);

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
