import React from 'react';
import Block from 'components/Block/Block';
import { useSelector } from 'react-redux';
// import { getPosts } from 'redux/selectors';
import TableList from 'components/TableList/BlockTable';
import { productsTableTitles } from 'data/productsTableTitles';
import { getAppPageSettings } from 'redux/selectors';
import s from './BlockProductsList.module.scss';
const BlockProductsList = () => {
  // const posts = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  return (
    <Block title="Список товарів" iconId="list" actions="withFilter" filter className={s[pageGrid]} tableTitles={productsTableTitles}>
      <TableList />
    </Block>
  );
};

export default BlockProductsList;
