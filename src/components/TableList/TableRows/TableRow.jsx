import { useTable } from '../TableContext';
import RowContext from './RowContext';
import CellText from '../TebleCells/CellText';
import CellCategory from '../TebleCells/CellCategory';
import CellStatusApprove from '../TebleCells/CellStatusApprove';
import CellStatusVisibility from '../TebleCells/CellStatusVisibility';
import CellStatusAvailability from '../TebleCells/CellStatusAvailability';
import CellStatusType from '../TebleCells/CellStatusType';
import CellNumber from '../TebleCells/CellNumber';
import CellDate from '../TebleCells/CellDate';
import CellStatus from '../TebleCells/CellStatus';
import CellCheckBox from '../TebleCells/CellCheckBox';
import CellActions from '../TebleCells/CellActions';
import { useSelector } from 'react-redux';
import { getIndexPage } from 'redux/selectors';
// import { useDispatch } from 'react-redux';
// import { actionSelectPostByClick } from 'redux/posts/postsActions';

import { useNavigate } from 'react-router-dom';
import s from './TableRow.module.scss';

const TableRow = props => {
  // const dispatch = useDispatch();
  const indexPage = useSelector(getIndexPage);
  const navigate = useNavigate();
  const { tableTitles = [], rowGrid = {} } = useTable();

  const styles = {
    ...rowGrid,
  };

  const CellsMap = {
    string: CellText,
    date: CellDate,
    actions: CellActions,
    checkbox: CellCheckBox,
    category: CellCategory,
    approvedStatus: CellStatusApprove,
    visibilityStatus: CellStatusVisibility,
    availabilityStatus: CellStatusAvailability,
    typeStatus: CellStatusType,
    number: CellNumber,
    status: CellStatus,
  };

  let Cell = CellText;

  function handleOnRowClick(ev) {
    // const { target, currentTarget } = ev;

    const { rowData } = props;
    if (rowData?._id) {
      // dispatch(actionSelectPostByClick(rowData?._id));
      navigate(`/${indexPage}/${rowData?._id}`);
    }
  }
  return (
    <RowContext value={props}>
      <div style={styles} className={s.row} onClick={handleOnRowClick}>
        {tableTitles.map((title, idx) => {
          if (CellsMap[title.action]) {
            Cell = CellsMap[title.action];

            return <Cell key={title.name} title={title} idx={idx} />;
          }
          Cell = CellsMap.string;
          return <Cell key={title.name} title={title} idx={idx} />;
        })}
      </div>
    </RowContext>
  );
};

export default TableRow;
