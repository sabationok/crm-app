import s from './RowCells.module.scss';

const CellSaleSumm = ({ item, dataKey, data, idx }) => {
  return (
    <div className={[s.cell, s[dataKey]].join(' ')}>
      <span className={s.inner} title={data?.saleSumm}>
        {data?.saleSumm || 0}
      </span>
    </div>
  );
};

export default CellSaleSumm;
