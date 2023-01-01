import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from 'redux/categories/categoriesThunks';
import { getAllCategories } from 'redux/selectors';

export const BlockAdmin = ({ ...props }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getAllCategories);

  console.log(categories);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Block style={{ gridColumn: '1/6', gridRow: '1/5' }} {...props}>
      <div>
        <div>
          {categories.map(cat => (
            <div key={cat._id}>{cat.name}</div>
          ))}
          <form action="">
            <input type="text" value="" />
            <input type="text" value="" />
          </form>
        </div>
      </div>
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
