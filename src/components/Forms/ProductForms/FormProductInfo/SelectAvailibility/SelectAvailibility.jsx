import React from 'react';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';

// import s from './SelectAvailibility.module.scss';

const SelectAvailibility = () => {
  return (
    <>
      <PrimaryInput label="Наявність" name="availability"  />
      <PrimaryInput label="Термін виготовлення, дні" name="productionTime" type="number" min="1" max="31" placeholder="1-31"  />
    </>
  );
};

export default SelectAvailibility;
