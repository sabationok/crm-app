import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import { nanoid } from 'nanoid';
import { inputsOptional } from './inputsOptional';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

// import s from './OptionalInputs.module.scss';
const OptionalInputs = () => {
  const [formOptionalInputs, setFormOptionalInputs] = useState([...inputsOptional]);
  const { onChange } = useForm();

  function handleAddOptionalinput() {
    setFormOptionalInputs([...formOptionalInputs, { label: 'optional', name: nanoid(5), component: 'text' }]);
  }

  return (
    <>
      {formOptionalInputs.map(input => (
        <PrimaryInput key={input.name} {...input} onChange={onChange} />
      ))}

      <ButtonIcon styleType="BrandClrBtn" onClick={handleAddOptionalinput} type="button">
        Додати поле
      </ButtonIcon>
    </>
  );
};

export default OptionalInputs;
