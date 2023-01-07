import React, { useState, useEffect } from 'react';
import CategoryList from '../CategoriesList/CategoriesList';
// import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSectionsList } from '../SectionsList';
import s from './Category.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const Category = ({ item, toggleParentCategory, name }) => {
  const [isShow, setIsShow] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const { handleSelectCategory, selectedCategory, categoriesArr } = useSectionsList();

  const myCategoriesList = categoriesArr.filter(el => el?.owner === item._id);

  const categoriesCount = myCategoriesList.length;
  const renderList = isShow && categoriesCount > 0;

  const categoryClassList = [s.childrenContainer, isShow && ''].join(' ');
  const categoryBtnClassList = [s.children, isShow && s.isShow].join(' ');

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  function onChange(ev) {
    setSelected(!isSelected);
    const itemData = {
      sectionName: item?.sectionName,
      section: item?.section,
      ownerName: item?.ownerName,
      owner: item?.owner,
      name: item?.name,
      _id: item?._id,
    };
    handleSelectCategory(itemData);
  }
  useEffect(() => {
    if (selectedCategory?._id === undefined) {
      return;
    }
    if (selectedCategory?._id !== item?._id) {
      setSelected(false);
      return;
    }
    if (selectedCategory?._id === item?._id) {
      setSelected(true);
      return;
    }
  }, [item?._id, selectedCategory?._id]);
  return (
    <>
      <div className={categoryClassList}>
        <div className={categoryBtnClassList}>
          <label htmlFor={item?._id} className={s.input}>
            <input className="visually-hidden" type="radio" id={item?._id} value={item?._id} onChange={onChange} checked={isSelected} />
            <SvgIcon size="24px" iconId={isSelected ? 'checkBoxOn' : 'checkBoxOff'} />
          </label>

          <div className={s.nameWrapper}>
            <span className={s.name}>{`Категорія: ${item?.name} (${categoriesCount})`}</span>

            <span className={s.id}>{`(${item?._id})`}</span>
          </div>

          {<ButtonIcon iconId="select-arrow" className={s.showBtn} iconClassName={s.icon} disabled={!categoriesCount} onClick={handleShowBtnClick} />}
        </div>

        {renderList && (
          <div className={s.listContainer}>
            <CategoryList categoriesList={myCategoriesList} inputName={item?._id} />
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
