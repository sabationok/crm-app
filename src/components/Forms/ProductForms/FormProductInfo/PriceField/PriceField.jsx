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
  const [priceFormData, setPriceFormData] = useState({});
  function handleSetCommission(ev) {
    onPriceChange({ isCommission: true });

    setIsCommission(true);
  }
  function handleUnSetCommission(ev) {
    onPriceChange({ isCommission: false });

    setIsCommission(false);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setPriceFormData({ ...priceFormData, [name]: value });

    console.log(priceFormData);
  }
  function handleCountPrice() {
    onPriceChange({ ...priceFormData, isCommission });
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
        <PriceCommissionCounter isCommission={isCommission} priceFormData={priceFormData} onChange={handleChangeInput} handleCountPrice={handleCountPrice}/>
        {/* <ButtonIcon className={s.btnToCount} iconId={'checkBoxOn'} type="button" data="cost" onClick={handleAcceptCountedData}>
          Розрахувати
        </ButtonIcon> */}
      </div>
    </Fieldset>
  );
};

export default PriceField;
