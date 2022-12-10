import React from 'react';
import Block from 'components/Block/Block';

import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
import { useSelector } from 'react-redux';

import s from './BlockProductStock.module.scss';

import { getAppPage } from 'redux/selectors';

const BlockProductStock = () => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPage);

  return (
    <Block title="Склад" iconId="storage" actions="primary" className={s[pageGrid]}>
      <FormProductStock />
    </Block>
  );
};
export default BlockProductStock;
