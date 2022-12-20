import { useContext, createContext } from 'react';

export const TableCNTXT = createContext();
export const useTable = () => useContext(TableCNTXT);

const TableContext = ({ children, value }) => {
  return <TableCNTXT.Provider value={value}>{children}</TableCNTXT.Provider>;
};

export default TableContext;
