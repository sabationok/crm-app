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
import Cell from '../TebleCells/Cell';
import { useState, useEffect } from 'react';
import { useTable } from '../TableContext';
import { useSelector } from 'react-redux';
import { getIndexPage } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

import s from './TableRow.module.scss';
const TableRow = props => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const indexPage = useSelector(getIndexPage);
  const navigate = useNavigate();
  const { tableTitles = [], rowGrid } = useTable();

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
  function handleToggleActions() {
    setIsActionsOpen(!isActionsOpen);
  }
  function handleCloseActions() {
    setIsActionsOpen(false);
  }

  const ctxValue = {
    ...props,
    isActionsOpen,
    handleToggleActions,
    handleCloseActions,
  };
  // currentTarget
  useEffect(() => {
    function CloseRowActions(ev) {
      const { target } = ev;

      if (!target.closest(`#row${props.idx}`)) {
        console.log(`row${props.idx}`);
        setIsActionsOpen(false);
        window.removeEventListener('click', CloseRowActions);
      }
    }
    window.addEventListener('click', CloseRowActions);
    return () => {
      window.removeEventListener('click', CloseRowActions);
    };
  }, [isActionsOpen, props.idx]);
  return (
    <RowContext value={ctxValue}>
      <div className={s.rowContainer} id={`row${props.idx}`}>
        <RowActions />
        <div style={styles} className={s.row}>
          <div className={[s.rowStickyEl, 'listRow'].join(' ')}>
            <CellActions />

            <CellCheckBox />
          </div>
          {tableTitles.map((title, idx) => {
            let CellComp = CellText;

            if (CellsMap[title.action]) {
              CellComp = CellsMap[title.action];

              return (
                <Cell key={title.name} title={title} idx={idx}>
                  <CellComp title={title} idx={idx} onClick={handleOnRowClick} />
                </Cell>
              );
            }

            CellComp = CellText;
            return (
              <Cell key={title.name} title={title} idx={idx}>
                <CellComp key={title.name} title={title} idx={idx} onClick={handleOnRowClick} />
              </Cell>
            );
          })}
        </div>
      </div>
    </RowContext>
  );
};

export default TableRow;
