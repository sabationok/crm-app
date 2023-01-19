// import DateInfo from 'components/TableInfoComponents/DateInfo/DateInfo';
import CellGrid from '../OrderCells/CellGrid';
// import Status from 'components/TableInfoComponents/Status/Status';
// import { useSelector } from 'react-redux';
// import { getPageObjData } from 'redux/selectors';

import s from './OrderTopInfo.module.scss';

const OrderPersonInfo = ({ data }) => {
  // const order = useSelector(getPageObjData);

  const mapData = [
    { name: 'ID', inner: data?._id || 'ID' },
    { name: "І'мя", inner: data?.name || "І'мя" },
    { name: 'Телефон', inner: data?.phone || 'Телефон' },
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
export default OrderPersonInfo;
