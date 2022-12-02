import React from 'react';
import { useState } from 'react';
import PriceCommissionField from './PriceCommissionCounter/PriceCommissionCounter';
import PriceCostField from './PriceCostField/PriceCostField';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './PriceField.module.scss';
const PriceField = ({ onChangeState }) => {
  const [fieldData, setFieldData] = useState({});
  const [isCommission, setIsCommission] = useState(true);

  function handleSetCommission(ev) {
    setIsCommission(true);
  }
  function handleUnSetCommission(ev) {
    setIsCommission(false);
  }

  return (
    <fieldset className={s.inputBox}>
      <legend className={s.legend}>
        <span className={s.legendInner}>Ціна і вартість</span>
      </legend>

      <div className={s.flex}>
        <div className={s.grid}>
          <span>Оберіть тип</span>
          <div className={s.btnsGroup}>
            <ButtonIcon
              className={isCommission ? s.activeBtn : s.btn}
              iconId={isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="commission"
              onClick={handleSetCommission}
            >
              Комісія
            </ButtonIcon>
            <ButtonIcon
              className={!isCommission ? s.activeBtn : s.btn}
              iconId={!isCommission ? 'checkBoxOn' : 'checkBoxOff'}
              type="button"
              data="cost"
              onClick={handleUnSetCommission}
            >
              Собівартість
            </ButtonIcon>
          </div>
        </div>
        {isCommission && <PriceCommissionField />}
        {!isCommission && <PriceCostField />}
      </div>
    </fieldset>
  );
};

export default PriceField;
