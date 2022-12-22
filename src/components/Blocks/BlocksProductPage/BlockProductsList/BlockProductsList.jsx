import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';
import { useSelector } from 'react-redux';
import { getAppPageSettings, getPosts } from 'redux/selectors';
import { productsTableTitles } from 'data/productsTableTitles';
import { prepareProductData } from 'data/productsFormData';

import s from './BlockProductsList.module.scss';

const BlockProductsList = props => {
  const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    title: 'Список товарів',
    iconId: 'list',
    actions: 'withFilter',
    className: s[pageGrid],
    tableData: [...posts],
    tableTitles: productsTableTitles,
    prepareRowData: prepareProductData,
    ...props,
  };
  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockProductsList;
