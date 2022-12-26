import RowContext from './RowContext';
import RowActions from './RowActions/RowActions';
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
import { useState } from 'react';
import { useTable } from '../TableContext';
import { useSelector } from 'react-redux';
import { getIndexPage } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

import s from './TableRow.module.scss';
const TableRow = props => {
  const [isActionsOpen, setIsActionsOpen] = useState();
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

  function handleOnRowClick(ev) {
    const { rowData } = props;
    if (rowData?._id) {
      navigate(`/${indexPage}/${rowData?._id}`);
    }
  }
  function handleActionsOpen() {
    setIsActionsOpen(!isActionsOpen);
  }
  const ctxValue = {
    ...props,
    isActionsOpen,
    handleActionsOpen,
  };
  return (
    <RowContext value={ctxValue}>
      <div className={s.rowContainer}>
        <RowActions />

        <div style={styles} className={s.row}>
          <div className={[s.rowStickyEl, 'listRow'].join(' ')}>
            <CellActions />

            <CellCheckBox />
          </div>

          {tableTitles.map((title, idx) => {
            let Cell = CellText;

            if (CellsMap[title.action]) {
              Cell = CellsMap[title.action];

              return <Cell key={title.name} title={title} idx={idx} onClick={handleOnRowClick} />;
            }

            Cell = CellText;
            return <Cell key={title.name} title={title} idx={idx} onClick={handleOnRowClick} />;
          })}
        </div>
      </div>
    </RowContext>
  );
};

export default TableRow;
