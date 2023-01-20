import CellGrid from '../OrderCells/CellGrid';
// import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
// import Status from 'components/TableInfoComponents/Status/Status';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderSenderInfo = () => {
  const order = useSelector(getPageObjData);

  const mapData = [
    { name: 'Відправник', inner: order?.sender || 'sender name' },
    { name: 'Код відправника', inner: order?.senderCode || 'sender code' },
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
export default OrderSenderInfo;
