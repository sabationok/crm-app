import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import { inputsOptional } from './inputsOptional';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';

// import s from './OptionalInputs.module.scss';
const OptionalInputs = () => {
  const [formOptionalInputs, setFormOptionalInputs] = useState([...inputsOptional]);
  const { onChange } = useForm();

  function handleAddOptionalinput() {
    setFormOptionalInputs([...formOptionalInputs, { label: 'optional', name: nanoid(5), component: 'text' }]);
  }
  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    onChange({ [name]: value });
  }
  return (
    <>
      {formOptionalInputs.map(input => (
        <PrimaryInput key={input.name} {...input} onChange={handleChangeInput} />
      ))}

      <button onClick={handleAddOptionalinput} type="button">
        Додати інпут
      </button>
    </>
  );
};

export default OptionalInputs;
