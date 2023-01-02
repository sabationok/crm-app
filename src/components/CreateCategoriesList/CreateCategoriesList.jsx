import React, { createContext, useContext } from 'react';
import SectionItem from './SectionItem/SectionItem';
import { useSelector } from 'react-redux';
import { getAllCategories, getAppSettings } from 'redux/selectors';

import FormCreateSection from './FormCreateSection/FormCreateSection';

import s from './CreateCategoriesList.module.scss';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const CreateCategoriesList = () => {
  const { isDarkTheme } = useSelector(getAppSettings);
  const { categories } = useSelector(getAllCategories);

  const ctx = {
    categoriesArr: categories.filter(el => !el.isSection),
    sectionsArr: categories.filter(el => el.isSection),
  };
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
