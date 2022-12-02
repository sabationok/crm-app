import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './PriceCommissionCounter.module.scss';
// todo { label: 'Валюта', name: 'currency', action: 'text' },
// todo { label: 'Cashback ID', name: 'cashbackId', action: 'cashbackID' },
const commissionInputs = [
  { label: 'Ціна продажу', name: 'price', type: 'number', min: '1' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Собівартість', name: 'cost', type: 'number', min: '1', disabled: true },
  { label: 'Комісія. %', name: 'commission', type: 'number', min: '1', max: '100', placeholder: '%', autoFocus: true },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const costInputs = [
  { label: 'Ціна продажу', name: 'price', type: 'number', min: '1' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Собівартість', name: 'cost', type: 'number', min: '1', autoFocus: true },
  { label: 'Комісія. %', name: 'commission', disabled: true, placeholder: '%' },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const PriceCommissionCounter = ({ isCommission, onChange, priceFormData, handleCountPrice }) => {
  const { formData } = useForm();
  // const inialState = {
  //   price: 0,
  //   cost: 0,
  //   sale: 0,
  //   commission: 0,
  //   currency: '',
  //   cashbackId: '',
  // };

  // useEffect(() => {
  //   onPriceChange(formData);
  // }, [formData, onPriceChange]);
  return (
    <>
      <div className={s.grid}>
        {!isCommission &&
          commissionInputs.map(input => (
            <PrimaryInput key={input.name} value={priceFormData[input.name]} defaultValue={formData[input.name]} {...input} onChange={onChange} />
          ))}
        {isCommission &&
          costInputs.map(input => (
            <PrimaryInput key={input.name} value={priceFormData[input.name]} defaultValue={formData[input.name]} {...input} onChange={onChange} />
          ))}
      </div>
      <ButtonIcon className={s.btnToCount} iconId={'checkBoxOn'} type="button" data="cost" onClick={handleCountPrice}>
        Розрахувати
      </ButtonIcon>
    </>
  );
};

export default PriceCommissionCounter;
