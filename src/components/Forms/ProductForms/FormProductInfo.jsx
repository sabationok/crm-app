import React, { useState } from 'react';
import PrimaryInput from '../Inputs/PrimaryInput';
import ButtonText from 'components/ButtonText/ButtonText';

import s from './FormProductInfo.module.scss';

const FormProductInfo = ({ formTitle = 'Form title' }) => {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    console.log(formData);
  }
  function handleFormRest(ev) {
    setFormData(initialState);
  }
  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleFormSubmit} onReset={handleFormRest}>
        <div className={s.formTitle}>
          <span>{formTitle}</span>
        </div>
        <div className={s.inputs}>
          <PrimaryInput label="Input" placeholder="Input" name="1" value={formData['1']} onChange={handleChangeInput} />
          <PrimaryInput label="Input" placeholder="Input" name="2" value={formData['2']} onChange={handleChangeInput} />
          <PrimaryInput label="Input" placeholder="Input" name="3" value={formData['3']} onChange={handleChangeInput} />
          <PrimaryInput label="Input" placeholder="Input" name="4" value={formData['4']} onChange={handleChangeInput} />
          <PrimaryInput label="Input" placeholder="Input" name="5" value={formData['5']} onChange={handleChangeInput} />
        </div>
        <div className={s.buttons}>
          <ButtonText styleType="AcceptBtn" type="submit">
            Прийняти
          </ButtonText>
          <ButtonText styleType="ResetBtn" type="reset">
            Очистити
          </ButtonText>
          <ButtonText styleType="DeclineBtn">Видалити</ButtonText>
        </div>
      </form>
    </div>
  );
};

export default FormProductInfo;
