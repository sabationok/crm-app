import React from 'react';
import Block from 'components/Block/Block';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
export const BlockProductsList = () => {
  return <Block title="Список товарів" iconId="list" actions="withFilter" filter />;
};
export const BlockProductInfo = () => {
  return (
    <Block title="Деталі" iconId="info" actions="primary">
      <FormProductInfo />
      <FormProductImgs />
    </Block>
  );
};
export const BlockProductStock = () => {
  return (
    <Block title="Склад" iconId="storage" actions="primary">
      <FormProductStock />
    </Block>
  );
};

