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
          <div className={s.wrapper}>
            <span className={s.subtitle}>{data.ttn}</span>
            <span className={s.subtitle}>{data.content.length}</span>
            <span className={s.subtitle}>{data.ttn}</span>
          </div>
        }
      >
        <DeliveryBottom {...{ data }} />
      </AccordeonItem>
    </>
  );
};

export default Delivery;
