import React from 'react';
import Block from 'components/Block/Block';

import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
import BlockEmpty from '../BlockEmpty/BlockEmpty';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';
import { getPosts } from 'redux/selectors';

import s from './BlockProductStock.module.scss';

const BlockProductStock = () => {
  const { selectedPostId } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  return (
    <Block title="Склад" iconId="storage" actions="primary" className={s[pageGrid]}>
      {selectedPostId ? <FormProductStock /> : <BlockEmpty title="Оберіть пост зі списку" />}
    </Block>
  );
};
export default BlockProductStock;
