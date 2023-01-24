import React, { useState } from 'react';
import InputImg from '../Inputs/InputImg/InputImg';
import FormPrimary from '../FormPrimary/FormPrimary';
import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';
import { useModal } from 'components/Modal/ModalComponent';
import { useDispatch } from 'react-redux';
import { addPostImgsThunk } from 'redux/posts/postsThunks';

import s from './FormProductImgs.module.scss';

const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;
const initialState = [];

const FormProductImgs = ({ blockSettings }) => {
  const dispatch = useDispatch();
  const { appNotify } = useNotify();
  const [formData, setFormData] = useState(initialState);
  // const [selectedFiles, setSelectedFiles] = useState(initialState);
  const [filesCount, setFilesCount] = useState(5);
  const { handleToggleModal } = useModal();

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

    setFormData([...formData, ...checkedFiles]);

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
    dispatch(addPostImgsThunk(submitData));
  }
  function handleFormReset(ev) {
    setFormData(initialState);
  }
  function onEdit(file, idx) {
    console.log(file, 'for edit file');
  }
  function onDelete(file) {
    const newFilesArr = formData.filter(el => el.name !== file.name);

    setFormData(newFilesArr);

    toast.success(`File "${file.name}" deleted`);
  }
  function onZoomImg(content) {
    handleToggleModal(null, content);
  }

  // useEffect(() => {
  //   if (selectedFiles.length > 0) {
  //     const filterdSelectedFiles = selectedFiles.filter(file => file ?? file);

  //     setFormData([...filterdSelectedFiles]);
  //   }
  // }, [selectedFiles, selectedFiles.length]);

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
              onDelete={() => onDelete(file)}
              onEdit={() => onEdit(file)}
              onZoomImg={onZoomImg}
            />
          ))}
        {formData.length <= 4 && <InputImg name="img" id="img1" onChange={handleChangeInput} multiple />}
      </div>
    </FormPrimary>
  );
};

export default FormProductImgs;
