import React from 'react';
// import { useBlock } from 'components/Block/BlockContext';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import DateInfo from './DateInfo/DateInfo';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/selectors';

import RowSimple from './RowSimple/RowSimple';

import s from './TopInfo.module.scss';

const TopInfo = () => {
  const { posts } = useSelector(getPosts);
  const {
    isVisible,
    isApproved,
    createdAt,
    changedAt,
    name,
    sku,
    brand,
    authorName,
    authorId,
    authorType,
    changedByAuthorId,
    changedByAuthorName,
    changedByAuthorType,
    sectionId,
    section,
    parentCategoryId,
    parentCategory,
    categoryId,
    category,
  } = posts[0];

  // console.table(posts[0]);

  return (
    <>
      {/* <div className={s.buttons}>
        <ButtonIcon>Кнопка</ButtonIcon>

        <ButtonIcon>Кнопка</ButtonIcon>

        <ButtonIcon>Кнопка</ButtonIcon>
      </div> */}
      <div className={s.topInfo}>
        <RowSimple title="Створено" data={<DateInfo dateString={createdAt} />} />
        <RowSimple title="Автор (ID, тип)" data={`${authorName || 'author'} (${authorId || '0000'}, ${authorType || 'vendor'})`} />
        <RowSimple title="Видимість для покупців" data={isVisible ? 'Так' : 'Ні'} />
        <RowSimple title="Прийнято менеджером" data={isApproved ? 'Так' : 'Ні'} />
        <RowSimple title="SKU" data={sku} />
        <RowSimple title="Назва" data={name} />
        <RowSimple title="Бренд" data={brand} />
        <RowSimple title="Змінено" data={<DateInfo dateString={changedAt} />} />
        <RowSimple
          title="Автор (ID, тип)"
          data={`${changedByAuthorName || 'author'} (${changedByAuthorId || '0000'}, ${changedByAuthorType || 'vendor'})`}
        />

        <RowSimple title="Секція (ID)" data={`${section} (${sectionId})`} />
        <RowSimple title="Батьківська категорія (ID)" data={`${parentCategory} (${parentCategoryId})`} />
        <RowSimple title="Категорія (ID)" data={`${category} (${categoryId})`} />
      </div>


    </>
  );
};

export default TopInfo;
