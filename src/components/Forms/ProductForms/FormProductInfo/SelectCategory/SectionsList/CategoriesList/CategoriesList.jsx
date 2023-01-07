import React from 'react';
import Category from '../Category/Category';

import s from './CategoriesList.module.scss';

const CategoriesList = ({ categoriesList = [], inputName }) => {
  if (categoriesList.length === 0) {
    return <></>;
  }

  return (
    <fieldset className={s.categotiesList}>
      {categoriesList.map(item => (
        <Category key={item?._id} item={item} name={inputName} />
      ))}
    </fieldset>
  );
};

export default CategoriesList;
