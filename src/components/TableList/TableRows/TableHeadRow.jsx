import React from 'react';
import CellTitle from '../TebleCells/CellTitle';
import CellCheckBoxHead from '../TebleCells/CellCheckBoxHead';
// import CellActions from '../TebleCells/CellActions';
import { useTable } from '../TableContext';
import s from './TableRow.module.scss';
const TableHeadRow = () => {
  const { tableTitles = [], rowGrid = {} } = useTable();

  const styles = {
    ...rowGrid,
  };

  const CellsMap = {
    string: CellTitle,
    actions: CellTitle,
    checkbox: CellCheckBoxHead,
  };

  let Cell = CellTitle;
  return (
    <div style={styles} className={s.thRow}>
      {/* <CellTitle title={{ name: 'sdfbsdfb' }} /> */}
      {/* <CellCheckBoxHead /> */}
      {tableTitles.map((title, idx) => {
        if (CellsMap[title.action]) {
          Cell = CellsMap[title.action];

          return <Cell key={title.name} title={title} idx={idx} />;
        }
        Cell = CellsMap.string;
        return <Cell key={title.name} title={title} idx={idx} />;
      })}
    </div>
  );
};

export default TableHeadRow;
