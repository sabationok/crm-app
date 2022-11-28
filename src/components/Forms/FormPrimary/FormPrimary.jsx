import React from 'react';
import { useBlock } from 'components/Block/BlockContext';
import ButtonText from 'components/ButtonText/ButtonText';

import s from './FormPrimary.module.scss';
const FormPrimary = ({ children, onSubmit, onReset, formTitle = 'Form title' }) => {
  const { isFormDisabled } = useBlock();
  return (
    <div className={s.formContainer}>
      <form className={!isFormDisabled ? s.form : s.notActiveForm} onSubmit={onSubmit} onReset={onReset}>
        <div className={s.formTitle}>
          <span>{formTitle}</span>
        </div>
        {children ?? <div className={s.inputs}></div>}
        <div className={s.buttons}>
          <ButtonText styleType="AcceptBtn" type="submit">
            Прийняти
          </ButtonText>
          <ButtonText styleType="ResetBtn" type="reset">
            Очистити
          </ButtonText>
          <ButtonText styleType="DeclineBtn">Відхилити</ButtonText>
        </div>
      </form>
    </div>
  );
};

export default FormPrimary;
