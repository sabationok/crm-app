import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import Fieldset from 'components/Forms/Fieldset/Fieldset';

import { availabilityCheckboxes } from './constants';

import s from './SelectAvailibility.module.scss';

const SelectAvailibility = () => {
  const { onChange, formData, onAvailabilityChange, onOrderTypeChange } = useForm();
  const { available, notAvailable, awaitingOnStock, order, specialOrder } = availabilityCheckboxes;

  console.log(formData);
  return (
    <>
      <Fieldset legend="Наявність товару">
        <label htmlFor={notAvailable.name} className={s.label}>
          <input
            name={notAvailable.name}
            type="checkbox"
            id={notAvailable.name}
            onChange={onAvailabilityChange}
            value={formData?.availability}
            checked={formData?.availability === notAvailable.name}
          />
          <span>{notAvailable.label}</span>
        </label>
        <label htmlFor={awaitingOnStock.name} className={s.label}>
          <input
            name={awaitingOnStock.name}
            type="checkbox"
            id={awaitingOnStock.name}
            value={formData?.availability}
            checked={formData?.availability === awaitingOnStock.name}
            onChange={onAvailabilityChange}
          />
          <span>{awaitingOnStock.label}</span>
        </label>
        <label htmlFor={available.name} className={s.label}>
          <input
            name={available.name}
            type="checkbox"
            id={available.name}
            value={formData?.availability}
            onChange={onAvailabilityChange}
            checked={formData?.availability === available.name}
          />
          <span>{available.label}</span>
        </label>

        <div className={s.gridWrapper}>
          <label htmlFor={order.name} className={s.label}>
            <input name={order.name} type="checkbox" id={order.name} value={formData?.order} checked={formData?.order} onChange={onOrderTypeChange} />
            <span>{order.label}</span>
          </label>
          <PrimaryInput
            label="Термін очікування, дні"
            name="orderAwaitingTime"
            defaultValue={formData?.orderAwaitingTime}
            type="number"
            min="1"
            max="31"
            placeholder="1-31"
            disabled={!formData?.order}
            onChange={onChange}
          />
        </div>

        <div className={s.gridWrapper}>
          <label htmlFor={specialOrder.name} className={s.label}>
            <input
              name={specialOrder.name}
              type="checkbox"
              id={specialOrder.name}
              value={formData?.specialOrder}
              checked={formData?.specialOrder}
              onChange={onOrderTypeChange}
            />
            <span>{specialOrder.label}</span>
          </label>
          <PrimaryInput
            label="Термін очікування, дні"
            name="specialOrderAwaitingTime"
            defaultValue={formData?.specialOrderAwaitingTime}
            type="number"
            min="1"
            max="31"
            placeholder="1-31"
            disabled={!formData?.specialOrder}
            onChange={onChange}
          />
        </div>
      </Fieldset>
    </>
  );
};

export default SelectAvailibility;
