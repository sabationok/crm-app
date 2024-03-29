import React, { useContext, createContext } from 'react';
// import { useNotify } from 'components/Notify/NotifyProvider';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import s from './FormPrimary.module.scss';

export const FormProvider = createContext();
export const useForm = () => useContext(FormProvider);

const FormPrimary = ({
  id = '',
  children,
  onSubmit,
  onSubmitBtn,
  onCancel,
  onCancelBtn,
  onReset,
  onResetBtn,
  className = '',
  blockSettings = {},
  defaultButtons = true,
  ...props
}) => {
  return (
    <FormProvider.Provider value={{ ...props }}>
      <form onSubmit={onSubmit} onReset={onReset} id={id} className={className}>
        <BlockSimple
          {...blockSettings}
          footerChildren={
            defaultButtons && (
              <div className={s.buttons}>
                <ButtonIcon
                  iconId="doneAll"
                  styleType="AcceptBtn"
                  type="submit"
                  styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                  iconSize="26px"
                  title="Confirm"
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
                    title="Reset form"
                  >
                    <span className={s.btnName}>Очистити</span>
                  </ButtonIcon>
                )}

                {onCancel && (
                  <ButtonIcon
                    iconId="close"
                    styleType="DeclineBtn"
                    styles={{ width: 'fit-content', minHeight: 'fit-content' }}
                    iconSize="26px"
                    title="Reset form and close"
                    onClick={onCancel}
                  >
                    <span className={s.btnName}>Відхилити</span>
                  </ButtonIcon>
                )}
              </div>
            )
          }
        >
          <div className={s.formContainer}>{children ?? <div className={s.inputs}></div>}</div>
        </BlockSimple>
      </form>
    </FormProvider.Provider>
  );
};

export default FormPrimary;
