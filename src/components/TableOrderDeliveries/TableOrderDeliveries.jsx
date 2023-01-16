import React from 'react';
import Delivery from './Delivery/Delivery';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './TableOrderDeliveries.module.scss';

const TableOrderDeliveries = () => {
  const pageObjData = useSelector(getPageObjData);
  const order = pageObjData;
  return (
    <>
      {!order?.deliveries && <BlockEmpty title={'Відвантаження відсутні'} />}

      {order?.deliveries && (
        <div className={s.list}>
          {order?.deliveries.map(del => (
            <Delivery key={del._id} data={del}></Delivery>
          ))}

          {order?.deliveries.map(del => (
            <Delivery key={del._id} data={del} />
          ))}

          {order?.deliveries.map(del => (
            <Delivery key={del._id} data={del} />
          ))}

          {order?.deliveries.map(del => (
            <Delivery key={del._id} data={del} />
          ))}
        </div>
      )}
    </>
  );
};

export default TableOrderDeliveries;
