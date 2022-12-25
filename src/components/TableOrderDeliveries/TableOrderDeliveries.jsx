import React from 'react';
import { useBlock } from 'components/Block/BlockContext';
import Delivery from './Delivery';

import s from './TableOrderDeliveries.module.scss';

const TableOrderDeliveries = () => {
  const { order = {} } = useBlock();

  return (
    <>
      {!order?.deliveries && <div>Відвантаження відсутні</div>}

      {order?.deliveries && (
        <div className={s.list}>
          {order?.deliveries.map(del => (
            <Delivery key={del._id} data={del} />
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
