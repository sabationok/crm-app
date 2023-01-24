import React, { useState, useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './InputImg.module.scss';

const InputImg = ({ id, selectedFile = null, disabled = false, onDelete, onEdit, onZoomImg, ...props }) => {
  const [preview, setPreview] = useState();

  const modaLContent = (
    <div className={s.bigModalImgBox}>
      <img className={s.bigModalImg} src={preview} alt={selectedFile?.name} />
    </div>
  );

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
      <div className={disabled ? s.inputImgNotActive : s.inputImg}>
        <input className="visually-hidden" type="file" id={id} accept=".png, .jpg, .jpeg, .webp" disabled={disabled || selectedFile} {...props} />
        <label htmlFor={id} className={s.inputLabel}>
          {!selectedFile && <SvgIcon iconId="plus" size="40px" />}

          {preview && (
            <>
              <img className={s.labelInnerImg} src={preview} alt={selectedFile?.name} />

              <div className={s.previewActions}>
                {onZoomImg && (
                  <ButtonIcon
                    iconId="zoomPlus"
                    iconSize="60%"
                    className={s.actionBtn}
                    onClick={ev => {
                      onZoomImg(modaLContent);
                    }}
                  />
                )}
                {onEdit && <ButtonIcon iconId="edit" iconSize="60%" className={s.actionBtn} onClick={onEdit} />}
                {onDelete && <ButtonIcon iconId="delete" iconSize="60%" className={s.actionBtn} onClick={onDelete} />}
              </div>
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default InputImg;
// function handleDrop(e) {
//   e.stopPropagation(); e.preventDefault();
//   var f = e.dataTransfer.files[0];
//   /* f is a File */
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var data = e.target.result;
//     /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
//     var workbook = XLSX.read(data);

//     /* DO SOMETHING WITH workbook HERE */
//   };
//   reader.readAsArrayBuffer(f);
// }
// drop_dom_element.addEventListener("drop", handleDrop, false);
