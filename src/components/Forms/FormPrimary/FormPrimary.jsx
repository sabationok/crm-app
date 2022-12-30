import React, { useContext, createContext } from 'react';
import { useBlock } from 'components/Block/BlockContext';
// import { useNotify } from 'components/Notify/NotifyProvider';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import s from './FormPrimary.module.scss';

export const FormProvider = createContext();
export const useForm = () => useContext(FormProvider);

const FormPrimary = ({ children, onSubmit, onCancel, onReset, formTitle = 'Form title', id, blockSettings, ...props }) => {
  const { isFormDisabled } = useBlock();

  return (
    <FormProvider.Provider value={{ ...props, formTitle }}>
      <form onSubmit={onSubmit} onReset={onReset} id={id}>
        <BlockSimple
          {...blockSettings}
          footerChildren={
            <div className={s.buttons}>
              <ButtonIcon
                iconId="doneAll"
                styleType="AcceptBtn"
                type="submit"
                styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                iconSize="26px"
              >
                <span className={s.btnName}>Прийняти</span>
              </ButtonIcon>
              {onReset && (
                <ButtonIcon
                  iconId="clear"
                  styleType="ResetBtn"
                  type="reset"
                  styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                  iconSize="26px"
                >
                  <span className={s.btnName}>Очистити</span>
                </ButtonIcon>
              )}
              {onCancel && (
                <ButtonIcon
                  iconId="removeDone"
                  styleType="DeclineBtn"
                  styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                  iconSize="26px"
                  onClick={onCancel}
                >
                  <span className={s.btnName}>Відхилити</span>
                </ButtonIcon>
              )}
            </div>
          }
        >
          <div className={s.formContainer}>
            <fieldset disabled={isFormDisabled} className={!isFormDisabled ? s.form : s.notActiveForm}>
              <legend className={s.formTitle}>
                <span>{formTitle}</span>
              </legend>
              {children ?? <div className={s.inputs}></div>}
              <span>Далі буде ...</span>
            </fieldset>
          </div>
        </BlockSimple>
      </form>
    </FormProvider.Provider>
  );
};

export default FormPrimary;
