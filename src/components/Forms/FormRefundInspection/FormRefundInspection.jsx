import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputImg from '../Inputs/InputImg/InputImg';
import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import { useModal } from 'components/Modal/ModalComponent';

import s from './FormRefundInspection.module.scss';

const formInitialState = {
  status: '',
  reason: '',
  comment: '',
  innerComment: '',
};
const filesInitialState = [];
const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;

const FormRefundInspection = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [selectedFiles, setSelectedFiles] = useState(filesInitialState);
  const [filesCount, setFilesCount] = useState(5);
  const { handleToggleModal } = useModal();

  function onChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function onImgInputChange(ev) {
    const { files } = ev.target;

    if (files.length > filesCount) {
      toast.error(`Ви обрали більше ${filesCount} файлів`);
    }

    const filesArr = [...files];

    const checkedFiles = filesArr.filter(file => {
      if (!file.type.match(imageMimeType)) {
        toast.error(`Тип файлу "${file.name}", не підтримується`);
        return null;
      } else if (file.size > 524288) {
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
  function onEdit(file, idx) {
    console.log(file, 'for edit file');
  }
  function onDelete(file, idx) {
    const newFilesArr = selectedFiles.filter(el => el.name !== file.name);

    setSelectedFiles(newFilesArr);

    toast.success(`File "${file.name}" deleted`);
  }
  function onZoomImg(content) {
    handleToggleModal(null, content);
  }
  function onReset(ev) {
    setFormData(formInitialState);
    setSelectedFiles(filesInitialState);
    setFilesCount(5);
  }
  function onFormSubmit(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {
        ...formData,
        files: selectedFiles,
      },
      onSuccess: () => {
        toast.success(`Форму відправлено`);
      },
      onError: () => {
        toast.error(`Форму не відправлено`);
      },
    };

    console.log(payload);

    payload.onSuccess();
  }

  return (
    <>
      <div className={s.background}>
        <form className={s.InspectionForm} onSubmit={onFormSubmit}>
          <div className={s.inputs}>
            <PrimaryInput label="Статус" />
            <PrimaryInput label="Причина" />
            <PrimaryInput {...{ onChange, name: 'comment', value: formData?.comment, label: 'Коментар' }} />
            <PrimaryInput {...{ onChange, name: 'innerComment', value: formData?.innerComment, label: 'Внутрішній коментар' }} />
          </div>

          <div className={s.outImgs}>
            {selectedFiles.length > 0 &&
              selectedFiles.map((file, idx) => (
                <InputImg
                  key={idx}
                  name={file.name}
                  idx={idx}
                  id={file.name}
                  selectedFile={file}
                  onChange={onImgInputChange}
                  onDelete={() => onDelete(file)}
                  onEdit={() => onEdit(file)}
                  onZoomImg={onZoomImg}
                />
              ))}
            {selectedFiles.length <= 4 && <InputImg name="img" id="img1" onChange={onImgInputChange} multiple />}
          </div>

          <div className={s.buttons}>
            <ButtonIcon type="submit" styleType="BrandClrBtn">
              Прийняти
            </ButtonIcon>

            <ButtonIcon styleType="ErrorClrBtn" onClick={onReset}>
              Відхилити
            </ButtonIcon>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRefundInspection;
