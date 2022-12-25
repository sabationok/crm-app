import React, { useState, useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
// import { useDispatch } from 'react-redux';
import { applyFounder } from '../../BlockUtils/founder';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';

import scss from './BlockSearch.module.scss';

const BlockSearch = props => {
  const { tableTitles = [] } = useBlock();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState({ name: '' });
  const [isSelectOpen, seIsSelectOpen] = useState(false);
  const [foundedData, setFoundedData] = useState([]);
  // const dispatch = useDispatch();

  const classOpen = [scss.customSelect, isSelectOpen && scss.isOpen].join(' ');

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value);
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    if (searchQuery && searchParam.name) {
      toast.info(`Ви шукали: '${searchQuery}' серед '${searchParam.name}'`);
      return;
    }
    toast.error(`Не введено усіх параметрів пошуку`);
    // dispatch(searchQueryAction(searchQuery.trim()));
    // dispatch(searchParamAction(searchParam));
  }
  function handleToggleOpenSelect() {
    seIsSelectOpen(!isSelectOpen);
  }
  function onSearchParamClick({ evt, item }) {
    setSearchParam(item);
    handleToggleOpenSelect();
  }
  function handleChangeSearchParamInput(evt) {
    let { target } = evt;
    setSearchParam({ ...searchParam, name: target.value });
  }
  useEffect(() => {
    if (tableTitles.length === 0) {
      return;
    }
    setFoundedData(
      applyFounder({
        searchParam: 'name',
        searchQuery: searchParam.name,
        data: tableTitles.filter(el => el?.search && el?.visible),
      })
    );
  }, [searchParam, tableTitles]);

  useEffect(() => {
    if (!searchQuery === '') {
      // dispatch(searchQueryAction(''));
      console.log(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!searchParam.name === '') {
      console.log(searchParam.name);
      // dispatch(searchParamAction(''));
    }
  }, [searchParam]);
  return (
    <div className={scss.searchContainer}>
      <div className={scss.wrapper}>
        <form
          className={scss.form}
          onSubmit={evt => {
            handleFormSubmit(evt);
          }}
        >
          <div className={classOpen} onClick={handleToggleOpenSelect}>
            <input className={scss.inputParam} type="text" placeholder="Параметр" value={searchParam.name} onChange={handleChangeSearchParamInput} />
            <ul className={scss.selectList}>
              {foundedData.map(item => (
                <li
                  key={item.id}
                  className={scss.selectItem}
                  data-title={item.dataTitle}
                  onClick={evt => {
                    onSearchParamClick({ evt, item });
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={scss.customFounder}>
            <input
              className={scss.inputFounder}
              type="text"
              name="searchQuery"
              value={searchQuery}
              placeholder="Пошук"
              onChange={evt => {
                onInputChange(evt);
              }}
            />
          </div>

          <button className={scss.button} type="submit">
            <SvgIcon iconId="search" size="24px" />
          </button>
        </form>
      </div>
    </div>
  );
};

BlockSearch.propTypes = {};

export default BlockSearch;
