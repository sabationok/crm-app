import React from 'react';
import PriceCommissionCounter from '../PriceCommissionCounter/PriceCommissionCounter';

import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import Fieldset from 'components/Forms/Fieldset/Fieldset';

import s from './PriceField.module.scss';
const PriceField = () => {
  const {
    formData: { isCommission },
    onFormStateChange,
  } = useForm();
  function handleUnSetCommission() {
    onFormStateChange({ isCommission: false });
  }
  function handleSetCommission() {
    onFormStateChange({ isCommission: true });
  }
  return (
    <Fieldset legend="Ціна і вартість">
      <div className={s.flex}>
        <div className={s.grid}>
          <span>Що будемо рахувати?</span>
          <div className={s.btnsGroup}>
            <ButtonIcon
              className={[!isCommission ? s.activeBtn : s.btn, s.l].join(' ')}
              iconId={!isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="cost"
              onClick={handleUnSetCommission}
            >
              Собівартість
            </ButtonIcon>
            <ButtonIcon
              className={[isCommission ? s.activeBtn : s.btn, s.r].join(' ')}
              iconId={isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="commission"
              onClick={handleSetCommission}
            >
              Комісія
            </ButtonIcon>
          </div>
        </div>
        <PriceCommissionCounter />
      </div>
    </Fieldset>
  );
};

export default PriceField;
