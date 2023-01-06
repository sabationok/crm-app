import OrderListItem from '../OrderListItem/OrderListItem';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderContentList.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useState } from 'react';

const OrderContentList = () => {
  const order = useSelector(getPageObjData);
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleList() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen && s.isOpen}>
      <div className={s.relative}>
        <div className={s.sticky}>
          <ButtonIcon iconId="select-arrow" className={s.btn} iconClassName={s.icon} onClick={handleToggleList}>
            Розгорнути список
          </ButtonIcon>
        </div>
      </div>

      <div className={s.listContainer}>
        <ul className={s.list}>
          {order.orderContent && (
            <>
              {order.orderContent.map(data => (
                <OrderListItem key={data._id} {...{ data }} />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default OrderContentList;
