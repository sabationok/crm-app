import { useContext, createContext, useRef } from 'react';
// import cloneDeep from 'lodash.clonedeep';
// import { useSelector } from 'react-redux';
// import { selectPosts } from 'redux/selectors';
// import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';
import { useBlock } from 'components/Block/BlockContext';
import ts from './TableList.module.scss';

export const TableCNTXT = createContext();
export const useTable = () => useContext(TableCNTXT);

const TableContext = ({ children, value }) => {
  const { tableTitles = [], tableData = [], prepeareRowData } = useBlock();
  const prevRowRef = useRef();

  const rowGrid = {
    display: 'grid',

    gridTemplateColumns: `min-content repeat(${tableTitles.length}, min-content)`,
  };

  // function createRowGrid(tableTitles, print) {
  //   const tableCollWidth = tableTitles.map(el => el.width);
  //   const rowGrid = {
  //     display: 'grid',
  //     gridTemplateColumns: `min-content ${tableCollWidth.join(' ')}`,
  //     // gridTemplateColumns: `min-content repeat(${tableTitles.length}, 1fr)}`,
  //   };
  //   return rowGrid;
  // }

  // const { searchQuery, searchParam } = useSelector(selectPosts);
  // const [tableDataCloned, setTableDateCloned] = useState([]);
  // const [foundedPosts, setFoundedPosts] = useState([]);

  // useEffect(() => {
  //   if (tableData.length !== 0) {
  //     setTableDateCloned(cloneDeep(tableData));
  //     return;
  //   }
  // }, [tableData]);

  // useEffect(() => {
  //   setFoundedPosts(
  //     applyFounder({
  //       searchParam: searchParam,
  //       searchQuery: searchQuery,
  //       data: tableDataCloned,
  //     })
  //   );
  // }, [searchParam, searchQuery, tableDataCloned]);

  return (
    <TableCNTXT.Provider
      value={{
        ts,
        rowGrid: rowGrid,
        tableData,
        tableTitles,
        prepeareRowData,
        prevRowRef,
        ...value,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;
