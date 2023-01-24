import React from 'react';
import TextField from '@mui/material/TextField';

// import s from './PrimaryInput.module.scss';

const PrimaryInput = ({ label = 'input', disabled = false, placeholder = null, ...props }) => {
  return (
    <>
      <TextField label={label} disabled={disabled} placeholder={placeholder} {...props} variant="standard" />
    </>
  );
};
//   return (
//     <fieldset className={s.inputBox} disabled={disabled}>
//       {false && (
//         <legend className={s.legend}>
//           <span className={s.legendInner}>{label}</span>
//         </legend>
//       )}
//       {label && (
//         <div className={s.legend}>
//           <span className={s.legendInner}>{label}</span>
//         </div>
//       )}
//       <input className={s.input} {...props} />
//     </fieldset>
//   );
// };

export default PrimaryInput;
