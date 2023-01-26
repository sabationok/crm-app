import React, { useState } from 'react';

import Status from 'components/TableInfoComponents/Status/Status';
import { statusData } from 'data';

import s from './TableRefundRequest.module.scss';
import { nanoid } from 'nanoid';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const TableRequestRow = ({ data, onDelete }) => {
  return (
    <div className={s.rowContainer} id={data?._id} data-for-delete>
      {onDelete && (
        <div className={s.deleteHandler}>
          <ButtonIcon iconId="delete" styleType="ErrorClrBtn" onClick={onDelete} />
        </div>
      )}
      <div className={s.row}>
        <div className={s.cell}>{data?.sku}</div>
        <div className={s.cell}>{data?.name}</div>
        <div className={s.cell}>{data?.atr_1}</div>
        <div className={s.cell}>{data?.atr_2}</div>
        <div className={s.cell}>{data?.qtity}</div>
        <div className={s.cell}>{data?.price}</div>
        <div className={s.cell}>{data?.price && data?.qtity && data?.price * data?.qtity}</div>
      </div>
    </div>
  );
};
const selectedItems = [
  {
    _id: 'sdfbdfg13df25g13',
    sku: '18621354321',
    atr_1: 'L',
    atr_2: 'Рожева',
    name: 'Сукня шовкова',
    price: 2500,
    qtity: 1,
  },
];
const TableRefundRequest = ({ req }) => {
  const [itemsForChange, setItemsForChange] = useState([]);

  function addItemsForChange() {
    // const newSelectedItems = selectedItems.map(item => {
    //   return { ...item, _id: nanoid(12) };
    // });

    const newItem = {
      ...selectedItems[0],
      _id: nanoid(12),
    };
    setItemsForChange(prevState => [...prevState, newItem]);
  }
  function deleteForChangeItem(id) {
    setItemsForChange(prevState => prevState.filter(item => item?._id !== id));
  }
  function onTableRowClick(ev) {
    const { target } = ev;
    const row = target.closest('[data-for-delete]');
    if (row) {
      row.classList.toggle([s.forDelete]);
    }
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.table} onClick={onTableRowClick}>
          <div className={s.tHead}>
            <div>SKU</div>
            <div>Назва</div>
            <div>Атрибут 1</div>
            <div>Атрибут 2</div>
            <div>Кількість</div>
            <div>Ціна</div>
            <div>Сума</div>
          </div>

          <TableRequestRow data={req?.reqItem} />

          <div className={s.rowFlexWithBorders}>
            <Status status={req?.type} />
          </div>

          <TableRequestRow data={req?.changeItem} />

          <div className={s.rowFlexWithBorders}>
            <Status status={statusData.id.CHANGE_OFFER} />
          </div>

          {itemsForChange.map(item => {
            return (
              <TableRequestRow
                key={item?._id}
                data={item}
                onDelete={() => {
                  deleteForChangeItem(item?._id);
                }}
              />
            );
          })}
          {itemsForChange.length === 0 && <div className={s.rowFlex}>Нічого не обрано для рекомендації</div>}

          {/* <TableRequestRow data={req?.changeOfferItem} /> */}

          <div className={s.rowFlex}>
            <ButtonIcon styleType="ColoredBtn" onClick={addItemsForChange}>
              Додати
            </ButtonIcon>
          </div>

          <div className={s.rowFlexWithBorders}>
            {/* <Status status={statusData.id.CHANGE_OFFER} /> */}
            <div>РЕЗУЛЬТАТ</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableRefundRequest;
