import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSectionsList } from '../CreateCategoriesList';

import s from './SectionItem.module.scss';

const SectionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { categoriesArr } = useSectionsList();
  console.log(categoriesArr);
  function handleShowBtnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <li className={[s.sectionItemContainer, isOpen && s.isOpen].join(' ')}>
      <div className={s.sectionItem}>
        <span>{item?.name}</span>
        <ButtonIcon iconClassName={s.icon} iconId="select-arrow" onClick={handleShowBtnClick} />
      </div>

      {/* {isOpen && (
        <CategoriesList
          categoriesList={item.categories}
          inputName={item?.section}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleSelectCategory}
        />
      )} */}
    </li>
  );
};

export default SectionItem;
