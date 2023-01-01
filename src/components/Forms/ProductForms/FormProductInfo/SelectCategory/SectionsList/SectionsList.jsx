import React, { useState, createContext, useContext } from 'react';
import SectionItem from './SectionItem/SectionItem';
import BlockSimple from 'components/BlockSimple/BlockSimple';

import { useModal } from 'components/ModalCustom/ModalCustom';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import { categoriesArr } from '../categoriesArr';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './SectionsList.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const initialState = {
  sectionId: '',
  section: '',
  parentCategoryId: '',
  parentCategory: '',
  categoryId: '',
  category: '',
};

const SectionsList = () => {
  const { isDarkTheme } = useSelector(getAppSettings);
  const { onFormStateChange } = useForm();
  const { handleToggleModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState(initialState);
  const [disabledAcceptBtn, setDisabledAcceptBtn] = useState(true);

  function onAcceptBtnClick(evt) {
    onFormStateChange(selectedCategory);
    handleToggleModal();
  }
  function onDeclineBtnClick(evt) {
    handleToggleModal();
  }
  function handleSelectCategory(category) {
    setSelectedCategory(category);
    setDisabledAcceptBtn(false);
  }
  const ctx = {
    handleSelectCategory,
    selectedCategory,
  };
  return (
    <>
      <SectionsListContext.Provider value={{ ...ctx }}>
        <BlockSimple
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
          <ul className={[s.sectionsList, isDarkTheme ? s.Dark : s.Light].join(' ')}>
            {categoriesArr.map(item => (
              <SectionItem key={item.sectionId} item={item} />
            ))}
          </ul>
        </BlockSimple>
      </SectionsListContext.Provider>
    </>
  );
};

export default SectionsList;
