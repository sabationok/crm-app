// import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../OrderCells/CellGrid';
// import Status from 'components/TableInfoComponents/Status/Status';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderShipmentInfo = () => {
  const order = useSelector(getPageObjData);

  const mapData = [
    { name: 'Тип', inner: order?.shipmentType || 'selfPickUp | courier | delivery' },
    { name: 'К-ть відвантажень', inner: order?.deliveries?.length || 0 },

    { name: 'Перевізник', inner: order?.transporter || '(Тут має бути назва транспортної компанії)' },
    { name: 'Код перевізника', inner: order?.transporterCode || '(Тут має бути код транспортної компанії)' },
    { name: 'Коментар', inner: order?.comment || '(Тут має бути коментар)' },
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
export default OrderShipmentInfo;
