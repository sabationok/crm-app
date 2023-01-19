import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../OrderCells/CellGrid';
import Status from 'components/TableInfoComponents/Status/Status';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderMainInfo = () => {
  const order = useSelector(getPageObjData);

  const mapData = [
    { name: 'Номер', inner: order?.number },
    { name: 'Створено', inner: <DateInfo dateString={order?.createdAt} /> },
    { name: 'Створив', inner: order?.creator?.name },
    { name: 'Змінено', inner: <DateInfo dateString={order?.updatedAt} /> },
    { name: 'Змінив', inner: order?.updator?.name },
    { name: 'Статус', inner: <Status status={order?.status} /> },
    { name: 'Тип', inner: <Status status={order?.type} /> },
    { name: 'Менеджер', inner: order?.manager || '(ПІП таа Код менеджера)' },
    // { name: 'Коментар', inner: order?.comment || '(Тут має бути коментар)' },
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
export default OrderMainInfo;
