import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';

import s from './InputImg.module.scss';
import { useEffect } from 'react';

const InputImg = ({ name, id, onChange, selectedFile = null, multiple = false, disabled = false }) => {
  const [preview, setPreview] = useState();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    fileReader = new FileReader();
    if (selectedFile) {
      fileReader.onload = ev => {
        const { result } = ev.target;
        if (result || !isCancel) {
          setPreview(result);
        }
      };
      fileReader.readAsDataURL(selectedFile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [selectedFile]);

  return (
    <>
      <div className={s.inputImg}>
        <input
          className="visually-hidden"
          name={name}
          type="file"
          id={id}
          accept=".png, .jpg, .jpeg, .webp"
          disabled={selectedFile || disabled}
          multiple={multiple}
          onChange={onChange}
        />
        <label htmlFor={id} className={s.inputLabel}>
          {!selectedFile && (
            <span className={s.labelInner}>
              <SvgIcon iconId="plus" size="30px" />
            </span>
          )}
          <ModalOpenLink modalContent={<img  src={preview} alt={selectedFile?.name} />}>
            {preview && <img className={s.labelInnerImg} src={preview} alt={selectedFile?.name} />}
          </ModalOpenLink>
        </label>
      </div>
    </>
  );
};

export default InputImg;
