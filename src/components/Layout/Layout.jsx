import React from 'react';
import Header from './Header/Header';
import { useDispatch } from 'react-redux';
import { fetchAllCategories } from 'redux/categories/categoriesThunks';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
