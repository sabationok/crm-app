import React, { useState } from 'react';
import CategoryList from '../CategoriesList/CategoriesList';
import FormCreateCategory from '../FormCreateCategory/FormCreateCategory';
// import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSectionsList } from '../CreateCategoriesList';
import s from './Category.module.scss';

const Category = ({ owner, name }) => {
  const { categoriesArr } = useSectionsList();
  const [isShow, setIsShow] = useState(false);

  const myCategoiesArr = categoriesArr.filter(el => el.owner === owner._id);
  const categoriesCount = myCategoiesArr.length;
  const renderList = isShow && categoriesCount > 0;

  const categoryClassList = [s.childrenContainer, isShow && s.isShow].join(' ');
  const categoryOwnerClassList = [s.children, isShow && s.isShow].join(' ');

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  return (
    <>
      <div className={categoryClassList}>
        <div className={categoryOwnerClassList}>
          <span className={s.name}>{`${owner.name} (${owner._id})`}</span>

          {<ButtonIcon iconId="select-arrow" className={s.showBtn} iconClassName={s.icon} onClick={handleShowBtnClick} />}
        </div>

        {renderList && (
          <div className={s.listContainer}>
            <CategoryList owner={owner} />
          </div>
        )}
        {isShow && <FormCreateCategory owner={owner} />}
      </div>
    </>
  );
};

export default Category;
