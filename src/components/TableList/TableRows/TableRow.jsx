import { useTable } from '../TableContext';
import RowContext from './RowContext';
import CellText from '../TebleCells/CellText';
import CellCategory from '../TebleCells/CellCategory';
import CellStatusApprove from '../TebleCells/CellStatusApprove';
import CellStatusVisibility from '../TebleCells/CellStatusVisibility';
import CellStock from '../TebleCells/CellStock';
import CellNumber from '../TebleCells/CellNumber';
import CellCheckBox from '../TebleCells/CellCheckBox';
import CellActions from '../TebleCells/CellActions';

import s from './TableRow.module.scss';
const TableRow = props => {
  const { tableTitles = [], rowGrid = {} } = useTable();

  const styles = {
    ...rowGrid,
  };

  const CellsMap = {
    string: CellText,
    actions: CellActions,
    checkbox: CellCheckBox,
    category: CellCategory,
    approvedStatus: CellStatusApprove,
    visibilityStatus: CellStatusVisibility,
    stock: CellStock,
    number: CellNumber,
  };

  let Cell = CellText;

  return (
    <RowContext value={props}>
      <div style={styles} className={s.row}>
        {tableTitles.map((title, idx) => {
          if (CellsMap[title.action]) {
            Cell = CellsMap[title.action];

            return <Cell key={title.name} {...title} idx={idx} />;
          }
          return <Cell key={title.name} {...title} idx={idx} />;
        })}
      </div>
    </RowContext>
  );
};

export default TableRow;
