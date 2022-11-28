import React from 'react';

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
  return (
    <div className={s.inputBox}>
      <label htmlFor={id} className={s.label}>
        <span className={s.labelInner}>{label}</span>
      </label>
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
      />
    </div>
  );
};

export default PrimaryInput;
