import s from './RowCells.module.scss';

const CellSumm = ({ item, dataKey, data, idx }) => {
  return (
    <div className={[s.cell, s[dataKey]].join(' ')}>
      <span className={s.inner} title={data?.summ}>
        {data?.total || 0}
      </span>
    </div>
  );
};

export default CellSumm;
