import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../OrderCells/CellGrid';
import Status from 'components/TableInfoComponents/Status/Status';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderTopInfo = () => {
  const order = useSelector(getPageObjData);

  const mapData = [
    {
      name: 'Створено',
      inner: <DateInfo dateString={order?.createdAt} time={false} />,
    },
    { name: 'Змінено', inner: <DateInfo dateString={order?.updatedAt} time={false} /> },
    { name: 'Номер', inner: order?.number },
    { name: 'Статус', inner: <Status status={order?.status} /> },
    { name: 'Менеджер', inner: order?.manager || '(ПІП таа Код менеджера)' },
    { name: 'Тип', inner: order?.type },
    { name: 'Оплата', inner: '(тут буде унфо про оплату, статус, тощо)' },
    { name: 'К-ть ТТН', inner: order?.deliveries?.length || 0 },
    { name: 'Коментар', inner: order?.comment },
  ];
  return (
    <>
      <div className={s.topInfo}>
        {mapData.map((el, idx) => (
          <CellGrid key={idx} name={el.name} text={el.inner} title={el?.title} />
        ))}
      </div>
    </>
  );
};
export default OrderTopInfo;
