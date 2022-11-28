import React from 'react';
import { useBlock } from 'components/Block/BlockContext';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

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
          <ButtonIcon iconId='doneAll' styleType="AcceptBtn" type="submit" styles={{width:'fit-content',minHeight:'fit-content'}} iconSize='26px'>
            <span className={s.btnName}>Прийняти</span>
          </ButtonIcon>
          <ButtonIcon iconId='clear' styleType="ResetBtn" type="reset" styles={{width:'fit-content',minHeight:'fit-content'}} iconSize='26px'>
            <span className={s.btnName}>Очистити</span>
          </ButtonIcon>
          <ButtonIcon iconId='removeDone' styleType="DeclineBtn" styles={{width:'fit-content',minHeight:'fit-content'}} iconSize='26px'><span className={s.btnName}>Відхилити</span></ButtonIcon>
        </div>
      </form>
    </div>
  );
};

export default FormPrimary;
