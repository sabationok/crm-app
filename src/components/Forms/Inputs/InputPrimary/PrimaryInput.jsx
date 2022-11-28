import React from 'react';
import { useBlock } from 'components/Block/BlockContext';

import s from './PrimaryInput.module.scss';
const PrimaryInput = ({
  label,
  value,
  defaultValue,
  name,
  required = false,
  id,
  type = 'text',
  placeholder,
  onChange,
  onClick,
}) => {
  const { isFormDisabled } = useBlock();
  return (
    <fieldset className={s.inputBox}>
      <legend className={s.legend}>
        <span className={s.legendInner}>{label}</span>
      </legend>

      {/* <label htmlFor={id} className={s.label}>
          <span className={s.labelInner}>{label}</span>
        </label> */}
      <input
        className={s.input}
        name={name}
        defaultValue={defaultValue}
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onClick={onClick}
        disabled={isFormDisabled}
      />
    </fieldset>
  );
};

export default PrimaryInput;
