import Status from 'components/TableInfoComponents/Status/Status';
import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';

import s from './DeliveryCellBottom.module.scss';

const DeliveryCellBottom = ({ item = {}, title = 'title', dataKey = 'dataKey', data = {} }) => {
  const statusCheck = ['status', 'type'].includes(dataKey);
  const dateCheck = ['createdAt', 'updatedAt'].includes(dataKey);
  const destinationCheck = ['destination'].includes(dataKey);

  console.log(data?.destination?.detailedInfo);

  return (
    <li className={s[dataKey] || s.cell}>
      <div className={s.title}>{title}</div>

      <div className={s.inner}>
        <>{statusCheck && <Status status={data[dataKey]} />}</>
        <>{dateCheck && <DateInfo dateString={data[dataKey]} timeClassName={s.time} />}</>
        <>{!statusCheck && !dateCheck && !destinationCheck && <>{data[dataKey]}</>}</>
        <>{destinationCheck && <>{data?.destination?.detailedInfo}</>}</>
      </div>
    </li>
  );
};

export default DeliveryCellBottom;
