import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import PrimaryInput from 'components/Forms/Inputs/InputPrimary/PrimaryInput';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import { inputsStatic } from './inputsStatic';
// import s from './StaticInputs.module.scss';
const StaticInputs = () => {
  const { onChange, formData } = useForm();
  const [staticInputs] = useState([...inputsStatic]);

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    onChange({ [name]: value });
  }

  return (
    <>
      {staticInputs.map(input => (
        <PrimaryInput key={input.name} defaultValue={formData[input?.name]} {...input} onChange={handleChangeInput} />
      ))}
    </>
  );
};

export default StaticInputs;
