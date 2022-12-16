import { useTable } from '../TableContext';
import CellText from '../TebleCells/CellText';
import s from './TableRow.module.scss';
const TableRow = () => {
  const { tableTitles = [], rowGrid = {} } = useTable();

  const styles = {
    ...rowGrid,
  };

  return (
    <>
      <div style={styles} className={s.row}>
        {tableTitles.map((title, idx) => (
          <CellText key={title.id} {...title} idx={idx} />
        ))}
      </div>
    </>
  );
};

export default TableRow;
