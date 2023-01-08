import { useState, createContext, useContext, useEffect } from 'react';
import SectionItem from './SectionItem/SectionItem';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { useModal } from 'components/ModalCustom/ModalCustom';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import { useDispatch } from 'react-redux';
import { fetchAllCategories } from 'redux/categories/categoriesThunks';
import { useSelector } from 'react-redux';
import { getAllCategories, getAppSettings } from 'redux/selectors';

import s from './SectionsList.module.scss';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const initialState = {
  sectionName: '',
  section: '',
  ownerName: '',
  owner: '',
  name: '',
  _id: '',
};

const SectionsList = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  const { categories } = useSelector(getAllCategories);
  const { onFormStateChange } = useForm();
  const { handleToggleModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState(initialState);
  const [disabledAcceptBtn, setDisabledAcceptBtn] = useState(true); // const dispatch = useDispatch();

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

  const sectionsArr = categories.filter(el => el.isSection && !el.isArchived);
  const categoriesArr = categories.filter(el => !el.isSection && !el.isArchived);

  const ctx = {
    handleSelectCategory,
    selectedCategory,
    categoriesArr,
  };

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

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
            {sectionsArr.map(item => (
              <SectionItem key={item?._id} {...{ item }} />
            ))}
          </ul>
        </BlockSimple>
      </SectionsListContext.Provider>
    </>
  );
};

export default SectionsList;
