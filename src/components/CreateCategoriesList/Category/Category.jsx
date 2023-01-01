import React, { useState, useEffect } from 'react';
import CategoryList from '../CategoriesList/CategoriesList';
// import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSectionsList } from '../CreateCategoriesList';
import s from './Category.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const Category = ({ item, toggleParentCategory, name }) => {
  const [isShow, setIsShow] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const { handleSelectCategory, selectedCategory } = useSectionsList();
  const categoriesCount = item?.categories.length > 0;
  const renderList = isShow && categoriesCount;

  const categoryClassList = [s.childrenContainer, isShow && ''].join(' ');
  const categoryBtnClassList = [s.children, isShow && s.isShow].join(' ');

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  function onChange(ev) {
    setSelected(!isSelected);
    const itemData = {
      category: item?.category,
      categoryId: item?.categoryId,
      parentCategory: item?.parentCategory,
      parentCategoryId: item?.parentCategoryId,
      section: item?.section,
      sectionId: item?.sectionId,
    };
    handleSelectCategory(itemData);
    console.log(selectedCategory);
  }
  useEffect(() => {
    if (selectedCategory?.categoryId === undefined) {
      return;
    }
    if (selectedCategory?.categoryId !== item?.categoryId) {
      setSelected(false);
      return;
    }
    // if (selectedCategory?.categoryId === item?.categoryId) {
    //   setSelected(true);
    //   return;
    // }
  }, [item.categoryId, selectedCategory.categoryId]);
  return (
    <>
      <div className={categoryClassList}>
        <div className={categoryBtnClassList}>
          <label htmlFor={item?.categoryId} className={s.input}>
            <input className="visually-hidden" type="radio" id={item?.categoryId} value={item?.categoryId} onChange={onChange} checked={isSelected} />
            <SvgIcon size="24px" iconId={isSelected ? 'checkBoxOn' : 'checkBoxOff'} />
          </label>

          <span className={s.name}>{item.category}</span>
          <span className={s.id}>{item.categoryId}</span>

          {<ButtonIcon iconId="select-arrow" className={s.showBtn} iconClassName={s.icon} disabled={!categoriesCount} onClick={handleShowBtnClick} />}
        </div>

        {renderList && (
          <div className={s.listContainer}>
            <CategoryList categoriesList={item?.categories} inputName={item.category} />
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
