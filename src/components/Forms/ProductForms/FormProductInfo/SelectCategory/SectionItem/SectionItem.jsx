import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import CategoriesList from '../CategoriesList/CategoriesList';
import { useSectionsList } from '../SectionsList/SectionsList';

import s from './SectionItem.module.scss';

const SectionItem = ({ categories, item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSelectCategory, selectedCategory } = useSectionsList();
  function handleShowBtnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <li key={item.sectionId} className={[s.sectionItemContainer, isOpen && s.isOpen].join(' ')}>
      <div className={s.sectionItem}>
        <SvgIcon iconId={selectedCategory.sectionId === item.sectionId ? 'checkBoxOn' : 'checkBoxOff'} />
        <span>{item?.section}</span>
        <span>{item.sectionId}</span>
        <ButtonIcon iconClassName={s.icon} iconId="select-arrow" onClick={handleShowBtnClick} />
      </div>

      {isOpen && (
        <CategoriesList
          categoriesList={item.categories}
          inputName={item?.section}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleSelectCategory}
        />
      )}
    </li>
  );
};

export default SectionItem;
