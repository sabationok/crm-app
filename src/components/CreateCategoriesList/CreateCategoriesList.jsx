import { createContext, useContext, useEffect } from 'react';
import SectionItem from './SectionItem/SectionItem';
import FormCreateSection from './FormCreateSection/FormCreateSection';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, getAppSettings } from 'redux/selectors';
import { fetchAllCategories } from 'redux/categories/categoriesThunks';

import s from './CreateCategoriesList.module.scss';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const CreateCategoriesList = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  const { categories } = useSelector(getAllCategories);

  const ctx = {
    categoriesArr: categories.filter(el => !el.isSection),
    sectionsArr: categories.filter(el => el.isSection),
  };

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <>
      <SectionsListContext.Provider value={{ ...ctx }}>
        <div className={s.container}>
          {ctx.sectionsArr.length > 0 && (
            <ul className={[s.sectionsList, isDarkTheme ? s.Dark : s.Light].join(' ')}>
              {ctx.sectionsArr.map(item => {
                return <SectionItem key={item._id} section={item} />;
              })}
            </ul>
          )}

          <FormCreateSection />
        </div>
      </SectionsListContext.Provider>
    </>
  );
};

export default CreateCategoriesList;
