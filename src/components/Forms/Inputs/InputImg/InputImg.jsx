import React, { useState, useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import { useBlock } from 'components/Block/BlockContext';

import s from './InputImg.module.scss';

const InputImg = ({ name, id, onChange, selectedFile = null, multiple = false }) => {
  const [preview, setPreview] = useState();
  const { isFormDisabled } = useBlock();

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
      <div className={isFormDisabled ? s.inputImgNotActive : s.inputImg}>
        <input
          className="visually-hidden"
          name={name}
          type="file"
          id={id}
          accept=".png, .jpg, .jpeg, .webp"
          disabled={isFormDisabled || selectedFile}
          multiple={multiple}
          onChange={onChange}
        />
        <label htmlFor={id} className={s.inputLabel}>
          {!selectedFile && (
            <span className={s.labelInner}>
              <SvgIcon iconId="plus" size="30px" />
            </span>
          )}
          <ModalOpenLink modalContent={<img src={preview} alt={selectedFile?.name} />}>
            {preview && <img className={s.labelInnerImg} src={preview} alt={selectedFile?.name} />}
          </ModalOpenLink>
        </label>
      </div>
    </>
  );
};

export default InputImg;
