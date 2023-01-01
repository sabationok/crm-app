import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import { useDispatch } from 'react-redux';
import { fetchAllCategories } from 'redux/categories/categoriesThunks';
import CreateCategoriesList from 'components/CreateCategoriesList/CreateCategoriesList';

export const BlockAdmin = ({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Block iconId="folder" title="Категорії" style={{ gridColumn: '1/6', gridRow: '1/5' }} {...props}>
      <CreateCategoriesList />
    </Block>
  );
};
export const BlockManagers = ({ ...props }) => {
  return <Block style={{ gridColumn: '6/11', gridRow: '1/5' }} {...props} />;
};
export const BlockVendors = ({ ...props }) => {
  return <Block style={{ gridColumn: '1/6', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminRules = ({ ...props }) => {
  return <Block style={{ gridColumn: '6/11', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminSettings = ({ ...props }) => {
  return <Block style={{ gridColumn: '1/6', gridRow: '8/11' }} {...props} />;
};
