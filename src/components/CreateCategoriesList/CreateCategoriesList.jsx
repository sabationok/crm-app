import { createContext, useContext, useEffect } from 'react';
import SectionItem from './SectionItem/SectionItem';
import FormCreateSection from './FormCreateSection/FormCreateSection';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, getAllCategories, getAppSettings } from 'redux/selectors';
import { getAllCategoriesThunk } from 'redux/categories/categories.thunks';

import s from './CreateCategoriesList.module.scss';
import { toast } from 'react-toastify';
import AppLoader from 'components/AppLoader/AppLoader';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const CreateCategoriesList = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  const { categories = [], error, isLoading } = useSelector(categoriesSelector);

  const ctx = {
    sectionsArr: categories.filter(el => el.isSection),
    categoriesArr: categories.filter(el => !el.isSection),
  };

  useEffect(() => {
    const payload = {
      submitData: {},
      onSuccess: data => {
        console.log(data);
      },
      onError: error => {
        toast.error(`${error.message}`);
      },
    };
    dispatch(getAllCategoriesThunk(payload));
  }, [dispatch]);

  return (
    <>
      <AppLoader isLoading={isLoading} />
      <SectionsListContext.Provider value={{ ...ctx }}>
        <div className={s.container}>
          {!error && (
            <div>
              {ctx.sectionsArr.length > 0 && (
                <ul className={[s.sectionsList, isDarkTheme ? s.Dark : s.Light].join(' ')}>
                  {ctx.sectionsArr.map(item => {
                    return <SectionItem key={item._id} section={item} />;
                  })}
                </ul>
              )}
            </div>
          )}

          {error && (
            <div className={s.wrapper}>
              <span className={error ? s.error : s.empty}>
                <>{error ? error : `Секції та категорії відсутні`}</>
              </span>
            </div>
          )}

          <FormCreateSection />
        </div>
      </SectionsListContext.Provider>
    </>
  );
};

export default CreateCategoriesList;
