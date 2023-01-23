import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../../TableInfoComponents/Cells/CellGrid';
import Status from 'components/TableInfoComponents/Status/Status';
// import { useSelector } from 'react-redux';
// import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderPaymentInfo = ({ paymentInfo }) => {
  // const order = useSelector(getPageObjData);

  const mapData = [
    { name: 'Тип оплати', inner: <Status status={paymentInfo?.type} /> },
    { name: 'Статус', inner: <Status status={paymentInfo?.status} /> },
    { name: 'Змінено', inner: <DateInfo dateString={paymentInfo?.updatedAt} /> },
    { name: 'Заблоковані кошти', inner: paymentInfo?.blockedFunds || 0 },
    { name: 'Отримані кошти', inner: paymentInfo?.receivedFunds || 0 },
    { name: 'Отримані бонуси', inner: paymentInfo?.receivedBonuses || 0 },
    { name: 'Документ підтвердження оплати (ID)', inner: paymentInfo?.paymentDocumentID || '<<<--->>>' },
    { name: 'Інвойс для списання коштів (ID)', inner: paymentInfo?.invoiceId || '<<<--->>>' },
    { name: 'Інвойс для блокування коштів (ID)', inner: paymentInfo?.holdingInvoiceId || '<<<--->>>' },
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
export default OrderPaymentInfo;
