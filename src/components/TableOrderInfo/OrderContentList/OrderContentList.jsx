import OrderListItem from '../OrderListItem/OrderListItem';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './OrderContentList.module.scss';

const OrderContentList = () => {
  const order = useSelector(getPageObjData);

  return (
    <>
      <ul className={s.list}>
        {order?.orderContent && (
          <>
            {order.orderContent.map(data => (
              <OrderListItem key={data._id} {...{ data }} />
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default OrderContentList;
