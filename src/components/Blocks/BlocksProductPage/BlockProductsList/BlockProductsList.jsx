import React from 'react';
import Block from 'components/Block/Block';
import { useSelector } from 'react-redux';
// import { getPosts } from 'redux/selectors';
import { getAppPage } from 'redux/selectors';
import s from './BlockProductsList.module.scss';
const BlockProductsList = () => {
  // const posts = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPage);
  return <Block title="Список товарів" iconId="list" actions="withFilter" filter className={s[pageGrid]} />;
};

export default BlockProductsList;
