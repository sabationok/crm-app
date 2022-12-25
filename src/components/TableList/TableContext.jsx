import { useContext, createContext, useState } from 'react';
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
  const [selectedAll, setSelectedAll] = useState(false);
  const tableCollWidth = tableTitles.map(el => el.width);
  // const { searchQuery, searchParam } = useSelector(selectPosts);
  // const [tableDataCloned, setTableDateCloned] = useState([]);
  // const [foundedPosts, setFoundedPosts] = useState([]);

  const rowGrid = {
    display: 'grid',
    gridTemplateColumns: `80px ${tableCollWidth.join(' ')}`,
  };

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
        rowGrid,
        tableData,
        tableTitles,
        setSelectedAll: setSelectedAll,
        selectedAll: selectedAll,
        prepeareRowData,
        ...value,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;
