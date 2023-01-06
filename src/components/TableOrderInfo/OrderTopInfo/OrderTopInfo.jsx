import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../OrderCells/CellGrid';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';
import { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const OrderTopInfo = () => {
  const order = useSelector(getPageObjData);
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleInfo() {
    setIsOpen(!isOpen);
  }
  const mapData = [
    {
      name: 'Створено',
      inner: <DateInfo dateString={order.createdAt} time={false} />,
    },
    { name: 'Змінено', inner: <DateInfo dateString={order.updatedAt} time={false} /> },
    { name: 'Номер', inner: order.number },
    { name: 'Статус', inner: order?.status },
    { name: 'Менеджер', inner: order?.manager },
    { name: 'Тип', inner: order?.type },
    { name: 'Оплата', inner: '' },
    { name: 'К-ть ТТН', inner: order?.deliveries.length },
  ];
  return (
    <div className={[s.topInfoContainer, isOpen && s.isOpen].join(' ')}>
      <div className={s.sticky}>
        <ButtonIcon iconId="select-arrow" className={s.btn} iconClassName={s.icon} onClick={handleToggleInfo}>
          Розгорнути інформацію
        </ButtonIcon>

        <div className={s.topInfo}>
          {mapData.map((el, idx) => (
            <CellGrid key={idx} name={el.name} text={el.inner} title={el?.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OrderTopInfo;
