import { useState, createContext, useContext, useEffect } from 'react';
import SectionItem from './SectionItem/SectionItem';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { useModal } from 'components/ModalCustom/ModalCustom';
import { useForm } from 'components/Forms/FormPrimary/FormPrimary';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categories.thunks';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/selectors';

import s from './SectionsList.module.scss';
import AppLoader from 'components/AppLoader/AppLoader';
import { toast } from 'react-toastify';

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
  const { categories = [], error, isLoading } = useSelector(categoriesSelector);
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
    const payload = {
      submitData: {},
      onSuccess: response => {
        console.log(response);
      },
      onError: error => {
        toast.error(`${error.message}`);
      },
    };
    dispatch(getAllCategoriesThunk(payload));
  }, [dispatch]);

  return (
    <>
      <AppLoader {...{ isLoading }} />
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
          {sectionsArr.length === 0 ? (
            <div className={s.wrapper}>
              <span className={error ? s.error : s.empty}>
                <>{error ? error : `Секції та категорії відсутні`}</>
              </span>
            </div>
          ) : (
            <>
              {sectionsArr.map(item => (
                <SectionItem key={item?._id} {...{ item }} />
              ))}
            </>
          )}
        </BlockSimple>
      </SectionsListContext.Provider>
    </>
  );
};

export default SectionsList;
