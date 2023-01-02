import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { useDispatch } from 'react-redux';
import { fetchAddCategory } from 'redux/categories/categoriesThunks';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button } from '@mui/material';

import s from './FormCreateSection.module.scss';
const FormCreateSection = () => {
  const [sectionName, setSectionName] = useState('');
  const [formOpen, setFormOpen] = useState();
  const dispatch = useDispatch();

  function handleOpenForm() {
    setFormOpen(!formOpen);
  }
  function onInputChange(ev) {
    const { value } = ev.target;
    setSectionName(value);
  }
  function handleAddSection(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {
        isSection: true,
        name: sectionName,
      },
      onSuccess: () => {
        toast.success(`Створено секцію "${sectionName}"`);
      },
      onError: () => {
        toast.error('Помилка створення секції');
      },
    };
    if (!sectionName) {
      payload.onError();
      console.log(payload);
      return;
    }
    dispatch(fetchAddCategory(payload));
    setSectionName('');
  }
  return (
    <>
      {formOpen && (
        <form className={s.addForm} onSubmit={handleAddSection}>
          <PrimaryInput label="Назва секції" value={sectionName} onChange={onInputChange} size="small" />

          {/* <ButtonIcon className={s.addBtn} iconId="plus" type="submit" styleType="ColoredBtn" disabled={!sectionName}>
            Добавити 
          </ButtonIcon> */}
          <Button variant="contained" color="success" type="submit" disabled={!sectionName}>
            Додати
          </Button>

          <Button variant="outlined" color="error" onClick={handleOpenForm}>
            Відміна
          </Button>
        </form>
      )}
      {!formOpen && <Button onClick={handleOpenForm}>Додати секцію</Button>}
    </>
  );
};

export default FormCreateSection;
