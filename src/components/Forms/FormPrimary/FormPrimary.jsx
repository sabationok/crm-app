import React, { useContext, createContext } from 'react';
import { useBlock } from 'components/Block/BlockContext';
// import { useNotify } from 'components/Notify/NotifyProvider';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './FormPrimary.module.scss';

export const FormProvider = createContext();
export const useForm = () => useContext(FormProvider);

const FormPrimary = ({ children, onSubmit, onReset, formTitle = 'Form title', ...props }) => {
  const { isFormDisabled } = useBlock();

  return (
    <FormProvider.Provider value={{ ...props, formTitle }}>
      <div className={s.formContainer}>
        <form onSubmit={onSubmit} onReset={onReset}>
          <fieldset disabled={isFormDisabled} className={!isFormDisabled ? s.form : s.notActiveForm}>
            <legend className={s.formTitle}>
              <span>{formTitle}</span>
            </legend>
            {children ?? <div className={s.inputs}></div>}
            <span>Далі буде ...</span>
            <div className={s.buttons}>
              <ButtonIcon
                iconId="doneAll"
                styleType="AcceptBtn"
                type="submit"
                styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                iconSize="26px"
                disabled={isFormDisabled}
              >
                <span className={s.btnName}>Прийняти</span>
              </ButtonIcon>
              <ButtonIcon
                iconId="clear"
                styleType="ResetBtn"
                type="reset"
                styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                iconSize="26px"
                disabled={isFormDisabled}
              >
                <span className={s.btnName}>Очистити</span>
              </ButtonIcon>
              <ButtonIcon
                iconId="removeDone"
                styleType="DeclineBtn"
                styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                iconSize="26px"
                disabled={isFormDisabled}
              >
                <span className={s.btnName}>Відхилити</span>
              </ButtonIcon>
            </div>
          </fieldset>
        </form>
      </div>
    </FormProvider.Provider>
  );
};

export default FormPrimary;
