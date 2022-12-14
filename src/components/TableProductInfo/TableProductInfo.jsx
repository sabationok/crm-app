import React from 'react';
import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import Status from 'components/TableInfoComponents/Status/Status';
import RowSimple from 'components/TableInfoComponents//RowSimple/RowSimple';
import { useBlock } from 'components/Block/BlockContext';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './TableProductInfo.module.scss';

const TableProductInfo = () => {
  const post = useSelector(getPageObjData);
  const { printRef } = useBlock();

  const { createdBy, updatedBy, categoryInfo, availabilityInfo, priceInfo } = post;

  return (
    <>
      <div className={s.table} ref={printRef}>
        <RowSimple title="Статус" data={<Status status={post?.approvedStatus} />} info="Статус огляду менеджером" />
        <RowSimple
          title="Видимість"
          data={<Status status={post?.visibilityStatus ? 'visible' : 'hidden'} />}
          info="Чи видимий пост для користувачів"
        />

        <RowSimple title="SKU" data={post?.sku} />
        <RowSimple title="Назва" data={post?.name} />
        <RowSimple title="Бренд" data={post?.brand} />

        <RowSimple title="Створено, Дата (Час)" data={<DateInfo dateString={post?.createdAt} />} />
        <RowSimple
          title="Автор (ID, Тип)"
          data={`${createdBy?.authorName || 'author'} (${createdBy?.authorId || '0000'}, ${createdBy?.authorType || 'vendor'})`}
        />

        <RowSimple title="Змінено, Дата (Час)" data={<DateInfo dateString={post?.updatedAt} />} />
        <RowSimple
          title="Автор (ID, тип)"
          data={`${updatedBy?.updatorName || 'author'} (${updatedBy?.updatorId || '0000'}, ${updatedBy?.updatorType || 'vendor'})`}
        />

        <RowSimple title="Ціна" data={`${priceInfo?.price} `} />
        <RowSimple title="Вартість" data={`${priceInfo?.cost} `} />
        <RowSimple title="Кешбек, ID" data={`${priceInfo?.cashbackId} `} />
        <RowSimple
          title="Тип"
          data={<Status status={priceInfo?.isCommission ? 'isCommission' : 'isStandart'} />}
          info="Спосіб розрахунку собівартості"
        />
        <RowSimple title="Комісія, %" data={`${priceInfo?.commission} `} />
        <RowSimple title="Знижка, %" data={`${priceInfo?.sale} `} />
        <RowSimple title="Валюта" data={`${priceInfo?.currency} `} />

        <RowSimple title="Секція (ID)" data={`${categoryInfo?.section} (${categoryInfo?.sectionId})`} />
        <RowSimple title="Батьківська категорія (ID)" data={`${categoryInfo?.parentCategory} (${categoryInfo?.parentCategoryId})`} />
        <RowSimple title="Категорія (ID)" data={`${categoryInfo?.category} (${categoryInfo?.categoryId})`} />

        <RowSimple title="Опис" data={`${post?.description || ''}`} />
        <RowSimple title="Внутрішній коментар" data={`${post?.innerComment}` || ''} info="Коментар який не буде замітно для користувачів зовні" />

        <RowSimple title="Наявність" data={<Status status={availabilityInfo?.availability} />} />
        <RowSimple title="Замовлення (Термін очікування)" data={`${availabilityInfo?.order} (${availabilityInfo?.orderAwaitingTime})`} />
        <RowSimple
          title="Індивідуальне виготовлення (Термін очікування)"
          data={`${availabilityInfo?.specialOrder} (${availabilityInfo?.specialOrderAwaitingTime})`}
        />

        <RowSimple title="ДАЛІ БУДЕ ..." />

        <RowSimple title="ЗОБРАЖЕННЯ ..." />
      </div>
    </>
  );
};

export default TableProductInfo;
