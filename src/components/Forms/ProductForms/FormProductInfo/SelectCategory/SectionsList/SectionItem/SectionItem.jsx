import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import CategoriesList from '../CategoriesList/CategoriesList';
import { useSectionsList } from '../SectionsList';

import s from './SectionItem.module.scss';

const SectionItem = ({ categories, item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSelectCategory, selectedCategory, categoriesArr } = useSectionsList();

  const myCategoriesList = categoriesArr.filter(el => el?.owner === item?._id);
  const categoriesCount = myCategoriesList.length;

  function handleShowBtnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <li key={item.sectionId} className={[s.sectionItemContainer, isOpen && s.isOpen].join(' ')}>
      <div className={s.sectionItem}>
        <SvgIcon iconId={selectedCategory.section === item?._id ? 'checkBoxOn' : 'checkBoxOff'} />

        <div className={s.nameWrapper}>
          <span className={s.name}>{`Секція: ${item?.name} (${categoriesCount})`}</span>

          <span className={s.id}>{`(${item?._id})`}</span>
        </div>

        <ButtonIcon iconClassName={s.icon} iconId="select-arrow" onClick={handleShowBtnClick} disabled={categoriesCount === 0} />
      </div>

      {isOpen && (
        <CategoriesList
          categoriesList={myCategoriesList}
          inputName={item?.section}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleSelectCategory}
        />
      )}
    </li>
  );
};

export default SectionItem;
