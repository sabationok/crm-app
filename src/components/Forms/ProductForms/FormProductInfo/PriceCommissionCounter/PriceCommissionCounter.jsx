import React, { useState } from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';

import s from './PriceCommissionCounter.module.scss';
// todo { label: 'Валюта', name: 'currency', action: 'text' },
// todo { label: 'Cashback ID', name: 'cashbackId', action: 'cashbackID' },
const commissionInputs = [
  { label: 'Ціна продажу', name: 'price' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Собівартість', name: 'cost', disabled: true },
  { label: 'Комісія. %', name: 'commission', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const costInputs = [
  { label: 'Ціна продажу', name: 'price' },
  { label: 'Комісія. %', name: 'commission', disabled: true, placeholder: '%' },
  { label: 'Собівартість', name: 'cost' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const PriceCommissionCounter = ({ isCommission }) => {
  const inialState = {
    price: 0,
    cost: 0,
    sale: 0,
    commission: 0,
    currency: '',
    cashbackId: '',
  };
  const [priceFormData, setPriceFormData] = useState(inialState);
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setPriceFormData({ ...priceFormData, [name]: value });
  }
  return (
    <>
      <div className={s.grid}>
        {isCommission && commissionInputs.map(input => <PrimaryInput key={input.name} {...input} onChange={handleChangeInput} />)}
        {!isCommission && costInputs.map(input => <PrimaryInput key={input.name} {...input} onChange={handleChangeInput} />)}
      </div>
    </>
  );
};

export default PriceCommissionCounter;
