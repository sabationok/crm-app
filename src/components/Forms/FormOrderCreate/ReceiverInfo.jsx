import { useState } from 'react';
import { useForm } from '../FormPrimary/FormPrimary';
import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';

import s from './FormOrderCreate.module.scss';

const ReceiverInfo = () => {
  const { stateMap, stateHandlers } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);

  function onChange(ev) {
    stateHandlers?.onChangeReceiverInfo(ev);
  }
  function onCheckBoxChange(ev) {
    const { checked } = ev.target;
    setIsDisabled(!isDisabled);
    stateHandlers?.setCustomerAsReceiver(checked);
  }

  const personInputs = [
    { name: '_id', label: 'ID', id: '1', onChange, disabled: isDisabled },
    { name: 'name', label: 'Ініціали', id: '2', onChange, disabled: isDisabled },
    { name: 'phone', label: 'Телефон', id: '3', onChange, disabled: isDisabled },
  ];

  return (
    <>
      <div className={s.labelWrapper}>
        <input id="setCustomerAsReceiver" type="checkbox" onChange={onCheckBoxChange} />
        <label htmlFor="setCustomerAsReceiver">Замовник є отримувачем</label>
      </div>

      {personInputs.map(input => (
        <PrimaryInput key={input.id} value={stateMap?.receiver[input.name]} {...input} />
      ))}
    </>
  );
};

export default ReceiverInfo;
