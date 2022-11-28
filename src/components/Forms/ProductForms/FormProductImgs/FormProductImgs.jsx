import React, { useEffect, useState } from 'react';
import InputImg from '../../Inputs/InputImg/InputImg';
import FormPrimary from '../../FormPrimary/FormPrimary';
import { toast } from 'react-toastify';

import s from './FormProductImgs.module.scss';

const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;

const FormProductImgs = ({ formTitle = 'Form title' }) => {
  const initialState = [];
  const [formData, setFormData] = useState(initialState);
  const [selectedFiles, setSelectedFiles] = useState(initialState);
  const [filesCount, setFilesCount] = useState(5);

  function handleChangeInput(ev) {
    const { files } = ev.target;
    if (files.length > filesCount) {
      toast.error(`Ви обрали більше ${filesCount} файлів`);
      return;
    }
    const filesArr = [...files];

    const checkedFiles = filesArr.filter(file => {
      if (!file.type.match(imageMimeType)) {
        toast.error('Image mime type is not valid');
        return null;
      } else if (file.size > 5242880) {
        toast.error(`File size of "${file.name}" is more than alowed, "${file.size}"`);
        return null;
      }
      toast.success(`File "${file.name} is accepted"`);
      return file;
    });
    setSelectedFiles([...selectedFiles, ...checkedFiles]);

    console.log(filesCount);
    const newFilesCount = filesCount - formData.length;
    setFilesCount(newFilesCount);
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();
    console.log(formData, `submit data`);
  }
  function handleFormReset(ev) {
    setFormData(initialState);
  }
  function onEdit(file, idx) {
    console.log(file, 'for edit file');
  }
  function onDelete(file, idx) {
    console.log(file, 'for delete file');
  }

  useEffect(() => {
    if (selectedFiles.length > 0) {
      const filterdSelectedFiles = selectedFiles.filter(file => file ?? file);
      console.log(filterdSelectedFiles);

      setFormData([...filterdSelectedFiles]);
    }
  }, [selectedFiles, selectedFiles.length]);

  return (
    <FormPrimary formTitle='Фото товару' onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <div className={s.inputs}>
        {formData.length > 0 &&
          formData.map((file, idx) => (
            <InputImg
              key={idx}
              name={file.name}
              idx={idx}
              id={file.name}
              selectedFile={file}
              onChange={handleChangeInput}
              onDelete={onDelete}
              onEdit={onEdit}
              multiple
            />
          ))}
        {formData.length <= 4 && <InputImg name="img" id="img1" onChange={handleChangeInput} multiple />}
      </div>
    </FormPrimary>
  );
};

export default FormProductImgs;
