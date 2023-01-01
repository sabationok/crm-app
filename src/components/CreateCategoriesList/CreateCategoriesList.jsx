import React, { useState, createContext, useContext } from 'react';
import SectionItem from './SectionItem/SectionItem';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, getAppSettings } from 'redux/selectors';

import s from './CreateCategoriesList.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { fetchAddCategory } from 'redux/categories/categoriesThunks';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import { toast } from 'react-toastify';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const CreateCategoriesList = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  const { categories } = useSelector(getAllCategories);
  const [sectionName, setSectionName] = useState('');

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
        toast.success('Успшіно');
      },
      onError: () => {
        toast.error('Проблема');
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

  const ctx = {
    categoriesArr: categories.filter(el => !el.isSection),
  };
  return (
    <>
      <SectionsListContext.Provider value={{ ...ctx }}>
        <div className={s.container}>
          <ul className={[s.sectionsList, isDarkTheme ? s.Dark : s.Light].join(' ')}>
            {categories.map(item => {
              return <SectionItem key={item._id} item={item} />;
            })}
          </ul>
          <form className={s.addForm} onSubmit={handleAddSection}>
            <PrimaryInput label="Назва секції" value={sectionName} onChange={onInputChange} />
            <ButtonIcon className={s.addBtn} type="submit">
              Добавити секцію
            </ButtonIcon>
          </form>
        </div>

        {/* <BlockSimple
          title="Оберіть категорію"
          headerClassName={s.header}
          className={s.selectCategoryModal}
          footerChildren={
            <div className={s.footer}>
              <ButtonIcon type="button" className={s.btn} onClick={onAcceptBtnClick} disabled={disabledAcceptBtn}>
                Прийняти
              </ButtonIcon>
              <ButtonIcon type="button" className={s.btn} onClick={onDeclineBtnClick}>
                Відхилити
              </ButtonIcon>
            </div>
          }
        >

        </BlockSimple> */}
      </SectionsListContext.Provider>
    </>
  );
};

export default CreateCategoriesList;
