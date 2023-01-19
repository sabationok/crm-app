import React from 'react';
import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { useForm } from '../FormPrimary/FormPrimary';
// import s from './FormOrderCreate.module.scss';

const ShipmentInfo = () => {
  const { stateMap, stateHandlers } = useForm();
  function onChange(ev) {
    stateHandlers?.onChangeShipmentInfo(ev);
  }

  const shipmentInputs = [
    { name: 'type', label: 'Тип', id: '1', onChange },
    { name: 'destination', label: 'Місце призначення', id: '2', onChange },
    { name: 'description', label: 'Коментар', id: '3', onChange },
  ];

  return (
    <>
      {shipmentInputs.map(input => (
        <PrimaryInput key={input.id} value={stateMap?.shipment[input.name]} {...input} />
      ))}
    </>
  );
};

export default ShipmentInfo;
