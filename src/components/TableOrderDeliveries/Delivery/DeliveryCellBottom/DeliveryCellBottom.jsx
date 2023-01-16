import Status from 'components/TableInfoComponents/Status/Status';
import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';

import s from './DeliveryCellBottom.module.scss';

const DeliveryCellBottom = ({ item = {}, title = 'title', dataKey = 'dataKey', data = {} }) => {
  const statusCheck = ['status', 'type'].includes(dataKey);
  const dateCheck = ['createdAt', 'updateAt'].includes(dataKey);

  // let Component;

  // const CompMap = {
  //   status: Status,
  //   type: Status,
  //   createdAt: DateInfo,
  //   updateAt: DateInfo,
  // };

  return (
    <li className={s[dataKey] || ''}>
      <div className={s.title}>{title || ''}</div>

      <div className={s.inner}>
        <>{statusCheck && <Status status={data[dataKey]} />}</>
        <>{dateCheck && <DateInfo dateString={data[dataKey]} />}</>
        <>{!statusCheck && !dateCheck && <>{data[dataKey]}</>}</>
        {/* <>{statusCheck ? <Status status={data[dataKey]} /> : data[dataKey]}</> */}
      </div>
    </li>
  );
};

export default DeliveryCellBottom;
