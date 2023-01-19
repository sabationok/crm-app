import React, { useEffect, useState } from 'react';
import InputImg from '../Inputs/InputImg/InputImg';
import FormPrimary from '../FormPrimary/FormPrimary';
import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';

import { useDispatch } from 'react-redux';
import { fetchAddPostImgs } from 'redux/posts/postsThunks';

import s from './FormProductImgs.module.scss';

const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;

const FormProductImgs = ({ formTitle = 'Form title', blockSettings }) => {
  const dispatch = useDispatch();
  const initialState = [];
  const { appNotify } = useNotify();
  const [formData, setFormData] = useState(initialState);
  const [selectedFiles, setSelectedFiles] = useState(initialState);
  const [filesCount, setFilesCount] = useState(5);

  function handleChangeInput(ev) {
    const { files } = ev.target;

    if (files.length > filesCount) {
      toast.error(`Ви обрали більше ${filesCount} файлів`);
    }

    const filesArr = [...files];

    const checkedFiles = filesArr.filter(file => {
      if (!file.type.match(imageMimeType)) {
        toast.error(`Тип файлу "${file.name}", не підтримується`);
        return null;
      } else if (file.size > 5242880) {
        toast.error(`Розмір файлу "${file.name}" є більшим дозволеного.`);
        return null;
      }
      toast.success(`Файл "${file.name}" прийнято.`);

      return file;
    });
    setSelectedFiles([...selectedFiles, ...checkedFiles]);

    setFilesCount(prevFilesCount => {
      return prevFilesCount - formData.length;
    });
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();
    console.log(formData, `submit data`);

    const submitData = {
      submitData: formData,
      onSuccess: () => {
        appNotify.info('Завантаження файлів', `Кількість завантажених файлів: ${formData.length}`);
      },
      onError: error => {
        appNotify.info(`Завантаження файлів перервано, спробуйте ще раз. Помилка: ${error.message}`);
      },
    };
    // appNotify.info('Завантаження файлів', `Кількість завантажених файлів: ${formData.length}`);
    console.log(formData);
    dispatch(fetchAddPostImgs(submitData));
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
    <FormPrimary
      blockSettings={blockSettings}
      formTitle="Фото товару"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      enctype="multipart/form-data"
    >
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
            />
          ))}
        {formData.length <= 4 && <InputImg name="img" id="img1" onChange={handleChangeInput} multiple />}
      </div>
    </FormPrimary>
  );
};

export default FormProductImgs;
