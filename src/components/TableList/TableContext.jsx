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
  const { tableTitles = [] } = useBlock();
  // const { searchQuery, searchParam } = useSelector(selectPosts);
  const [selectedAll, setSelectedAll] = useState(false);
  // const [tableDataCloned, setTableDateCloned] = useState([]);
  // const [foundedPosts, setFoundedPosts] = useState([]);
  const rowGrid = {
    display: 'grid',
    // gridTemplateColumns: `repeat(${tableTitles.length}, max-content)`,
    gridTemplateColumns: `50px 40px repeat(${tableTitles.length - 2}, 115px)`,
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
        ...value,
        rowGrid,
        tableTitles: tableTitles,
        setSelectedAll: setSelectedAll,
        selectedAll: selectedAll,
        // visiblePosts: foundedPosts,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;
