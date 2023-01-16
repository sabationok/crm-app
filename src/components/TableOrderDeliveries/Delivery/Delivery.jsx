import DeliveryBottom from './DeliveryBottom/DeliveryBottom';

import AccordeonItem from './AccordeonItem/AccordeonItem';

import s from './Delivery.module.scss';

// const titlesTopArr = [
//   { title: 'Номер ТТН', dataKey: 'ttn' },
//   { title: 'Перевізник', dataKey: 'transporter' },
//   // { title: 'Замовлення', dataKey: 'owner' },
//   { title: 'Статус', dataKey: 'status' },
//   { title: 'Тип', dataKey: 'type' },
//   // { title: 'Вартість доставки', dataKey: 'cost' },
//   // { title: 'Коментар', dataKey: 'comment' },
// ];

const Delivery = ({ data }) => {
  return (
    <>
      <AccordeonItem
        title={
          <div className={s.gridWrapper}>
            <div className={s.flexWrapper}>
              <span className={s.subtitle}>{'Номер ТТН'}</span>
              <span className={s.text}>{data?.ttn}</span>
            </div>
            <div className={s.flexWrapper}>
              <span className={s.subtitle}>{'Вартість'}</span>
              <span className={s.text}>{data?.cost}</span>
            </div>
            <div className={s.flexWrapper}>
              <span className={s.subtitle}>{'Вміст'}</span>
              <span className={s.text}>{data?.content.length}</span>
            </div>
          </div>
        }
      >
        <DeliveryBottom {...{ data }} />
      </AccordeonItem>
    </>
  );
};

export default Delivery;
