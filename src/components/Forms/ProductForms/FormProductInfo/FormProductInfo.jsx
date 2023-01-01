import React, { useState, useEffect } from 'react';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
// import { getUserData } from 'redux/selectors';
import { initialState } from '../../../../data/products';
import { useModal } from 'components/ModalCustom/ModalCustom';
import { useDispatch } from 'react-redux';
import { fetchAddPost, fetchEditPost } from 'redux/posts/postsThunks';
import { useParams } from 'react-router-dom';
import { usePage } from 'components/AppPages/PageProvider';
import FormPrimary from '../../FormPrimary/FormPrimary';
import PriceField from './PriceField/PriceField';
import InputTextarea from 'components/Forms/Inputs/InputTextarea/InputTextarea';
import StaticInputs from './StaticInputs/StaticInputs';
import OptionalInputs from './OptionalInputs/OptionalInputs';
import SelectAvailibility from './SelectAvailibility/SelectAvailibility';
import SelectCategory from './SelectCategory/SelectCategory';

import s from './FormProductInfo.module.scss';

const FormProductInfo = ({ edit = false, create = false, copy = false, blockSettings }) => {
  // const { user } = useSelector(getUserData);
  const { post } = usePage();
  const { id } = useParams();
  const { prepareRowData, prepareSubmitData } = useBlock();
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

    const payload = {
      data: prepareSubmitData(formData),
      onSuccess: () => {
        toast.success('Форму відправлено');
      },
      onError: () => {
        toast.error('Форму не відправлено');
      },
    };

    console.log(payload);
    if (edit && id) {
      dispatch(fetchEditPost(payload));
      return;
    }
    if (create || (copy && id)) {
      dispatch(fetchAddPost(payload));
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

  console.log(edit, 'edit', create, 'create', copy, 'copy');

  useEffect(() => {
    if (edit && post) {
      const newData = prepareRowData(post);

      setFormData(newData);
      return;
    }
    if (create) {
      setFormData(initialState);

      return;
    }
    if (copy && post) {
      const newData = prepareRowData(post);

      setFormData(newData);
      return;
    }
  }, [create, edit, copy, post, id, prepareRowData]);

  return (
    <FormPrimary
      blockSettings={blockSettings}
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
      className={s.form}
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
