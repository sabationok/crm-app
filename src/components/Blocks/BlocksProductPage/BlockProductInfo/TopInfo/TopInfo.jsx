import React from 'react';
// import { useBlock } from 'components/Block/BlockContext';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import DateInfo from './DateInfo/DateInfo';
import ApprovedStatus from './ApprovedStatus/ApprovedStatus';
import VisibilityStatus from './VisibilityStatus/VisibilityStatus';
import { useBlock } from 'components/Block/BlockContext';

import RowSimple from './RowSimple/RowSimple';

import s from './TopInfo.module.scss';

const TopInfo = () => {
  const { post } = useBlock();

  return (
    <>
      <div className={s.topInfo}>
        <RowSimple title="Статус" data={<ApprovedStatus status={post?.approvedStatus} />} info="Статус огляду менеджером" />

        <RowSimple title="SKU" data={post?.sku} />
        <RowSimple title="Назва" data={post?.name} />
        <RowSimple title="Бренд" data={post?.brand} />

        <RowSimple title="Створено" data={<DateInfo dateString={post?._createdAt} />} />
        <RowSimple title="Автор (ID, тип)" data={`${post?.authorName || 'author'} (${post?.authorId || '0000'}, ${post?.authorType || 'vendor'})`} />
        <RowSimple title="Видимість" data={<VisibilityStatus status={post?.visibilityStatus} />} info="Чи видимий пост для користувачів" />

        <RowSimple title="Змінено" data={<DateInfo dateString={post?._updatedAt} />} />
        <RowSimple
          title="Автор (ID, тип)"
          data={`${post?.changedByAuthorName || 'author'} (${post?.changedByAuthorId || '0000'}, ${post?.changedByAuthorType || 'vendor'})`}
        />

        <RowSimple title="Ціна" data={`${post?.price} `} />
        <RowSimple title="Вартість" data={`${post?.cost} `} />
        <RowSimple title="Кешбек, ID" data={`${post?.cashbackId} `} />
        <RowSimple title="Комісія, %" data={`${post?.commission} `} />
        <RowSimple title="Знижка, %" data={`${post?.sale} `} />
        <RowSimple title="Валюта" data={`${post?.currency} `} />

        <RowSimple title="Секція (ID)" data={`${post?.section} (${post?.sectionId})`} />
        <RowSimple title="Батьківська категорія (ID)" data={`${post?.parentCategory} (${post?.parentCategoryId})`} />
        <RowSimple title="Категорія (ID)" data={`${post?.category} (${post?.categoryId})`} />

        <RowSimple title="Опис" data={`${post?.description || ''}`} />
        <RowSimple title="Внутрішній коментар" data={`${post?.innerComment}` || ''} info="Коментар який не буде замітно для користувачів зовні" />

        <RowSimple title="ДАЛІ БУДЕ ..." />

        <RowSimple title="ЗОБРАЖЕННЯ ..." />
      </div>
    </>
  );
};

export default TopInfo;
