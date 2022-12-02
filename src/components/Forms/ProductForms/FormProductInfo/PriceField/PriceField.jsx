import React from 'react';
import { useState } from 'react';
import PriceCommissionCounter from '../PriceCommissionCounter/PriceCommissionCounter';

import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import Fieldset from 'components/Forms/Fieldset/Fieldset';

import s from './PriceField.module.scss';
const PriceField = () => {
  const { onPriceChange, priceData } = useForm();
  const [isCommission, setIsCommission] = useState(priceData.isCommission);
  function handleSetCommission(ev) {
    onPriceChange({ isCommission: true });

    setIsCommission(true);
  }
  function handleUnSetCommission(ev) {
    onPriceChange({ isCommission: false });

    setIsCommission(false);
  }

  return (
    <Fieldset legend="Ціна і вартість">
      <div className={s.flex}>
        <div className={s.grid}>
          <span>Що будемо рахувати?</span>
          <div className={s.btnsGroup}>
            <ButtonIcon
              className={!isCommission ? s.activeBtn : s.btn}
              iconId={!isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="cost"
              onClick={handleUnSetCommission}
            >
              Собівартість
            </ButtonIcon>
            <ButtonIcon
              className={isCommission ? s.activeBtn : s.btn}
              iconId={isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="commission"
              onClick={handleSetCommission}
            >
              Комісія
            </ButtonIcon>
          </div>
        </div>
        <PriceCommissionCounter isCommission={isCommission} />
      </div>
    </Fieldset>
  );
};

export default PriceField;
