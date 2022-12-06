import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import Fieldset from 'components/Forms/Fieldset/Fieldset';

import s from './SelectAvailibility.module.scss';
const SelectAvailibility = () => {
  const { onChange, onChangeCheckbox, formData } = useForm();
  // const [onStock, setOnStock] = useState(!formData?.notAvailable);

  // function handleCheckBoxChange(ev) {
  //   let { id, name, value, checked } = ev.target;
  //   console.log(`${id},${name},${value}, ${checked}`);
  //   onChange(ev);
  // }
  return (
    <>
      <Fieldset legend="Наявність товару">
        <label htmlFor="notAvailable" className={s.label}>
          <input
            name="notAvailable"
            type="checkbox"
            id="notAvailable"
            value={formData?.notAvailable}
            onChange={onChangeCheckbox}
            checked={formData?.notAvailable}
          />
          <span>Відсутній</span>
        </label>
        <label htmlFor="awaitingInStock" className={s.label}>
          <input name="awaitingInStock" type="checkbox" id="awaitingInStock" value={formData?.awaitingInStock} onChange={onChangeCheckbox} />
          <span>Очікується надходження</span>
        </label>
        <label htmlFor="onStock" className={s.label}>
          <input name="onStock" type="checkbox" id="onStock" value={formData?.onStock} onChange={onChangeCheckbox} checked={formData?.onStock} />
          <span>У наявності</span>
        </label>

        <label htmlFor="toOrder" className={s.label}>
          <input name="toOrder" type="checkbox" id="toOrder" value={formData?.toOrder} onChange={onChangeCheckbox} />
          <span>Під замовлення</span>
        </label>
        <PrimaryInput
          label="Термін очікування, дні"
          name="awaitingTime"
          defaultValue={formData?.awaitingTime}
          type="number"
          min="1"
          max="31"
          placeholder="1-31"
          disabled={!formData?.toOrder}
          onChange={onChange}
        />

        <label htmlFor="individualOrder" className={s.label}>
          <input name="individualOrder" type="checkbox" id="individualOrder" value={formData?.individualOrder} onChange={onChangeCheckbox} />
          <span>Індивідуальне виготовлення</span>
        </label>
        <PrimaryInput
          label="Термін виготовлення, дні"
          name="productionTime"
          defaultValue={formData?.productionTime}
          type="number"
          min="1"
          max="31"
          placeholder="1-31"
          disabled={!formData?.individualOrder}
          onChange={onChange}
        />
      </Fieldset>
    </>
  );
};

export default SelectAvailibility;
