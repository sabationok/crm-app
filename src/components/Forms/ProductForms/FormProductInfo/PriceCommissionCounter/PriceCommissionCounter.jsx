import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

import s from './PriceCommissionCounter.module.scss';
// todo { label: 'Валюта', name: 'currency', action: 'text' },
// todo { label: 'Cashback ID', name: 'cashbackId', action: 'cashbackID' },
const commissionInputs = [
  { label: 'Ціна продажу', name: 'price', type: 'number', min: '1' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Собівартість', name: 'cost', type: 'number', min: '1', disabled: true },
  { label: 'Комісія. %', name: 'commission', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const costInputs = [
  { label: 'Ціна продажу', name: 'price', type: 'number', min: '1' },
  { label: 'Знижка, %', name: 'sale', type: 'number', min: '1', max: '100', placeholder: '%' },
  { label: 'Собівартість', name: 'cost', type: 'number', min: '1' },
  { label: 'Комісія. %', name: 'commission', disabled: true, placeholder: '%' },
  { label: 'Валюта', name: 'currency' },
  { label: 'Кешбек ID', name: 'cashbackId', type: 'number', min: '0', max: '3', placeholder: '0-3' },
];
const PriceCommissionCounter = () => {
  const {
    formData,
    formData: { isCommission },
    onChange,
  } = useForm();

  function handleCountPrice() {}
  return (
    <>
      <div className={s.grid}>
        {!isCommission &&
          commissionInputs.map(input => <PrimaryInput key={input.name} onChange={onChange} value={formData[input.name]} {...input} />)}
        {isCommission && costInputs.map(input => <PrimaryInput key={input.name} onChange={onChange} value={formData[input.name]} {...input} />)}
      </div>

      <ButtonIcon data="cost" styleType="BrandClrBtn" onClick={handleCountPrice}>
        Розрахувати
      </ButtonIcon>
    </>
  );
};

export default PriceCommissionCounter;
