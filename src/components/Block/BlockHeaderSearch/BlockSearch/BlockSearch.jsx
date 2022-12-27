import React, { useState, useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
// import { useDispatch } from 'react-redux';
import { applyFounder } from '../../BlockUtils/founder';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';

import s from './BlockSearch.module.scss';

const BlockSearch = props => {
  const { tableTitles = [] } = useBlock();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState({ name: '' });
  const [isSelectOpen, seIsSelectOpen] = useState(false);
  const [foundedData, setFoundedData] = useState([]);
  // const dispatch = useDispatch();

  const classOpen = [s.customSelect, isSelectOpen && s.isOpen].join(' ');

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
  function handleToggleSelect() {
    seIsSelectOpen(!isSelectOpen);
  }
  // function handleCloseSelect() {
  //   seIsSelectOpen(false);
  // }
  function onSearchParamClick({ evt, item }) {
    setSearchParam(item);
    handleToggleSelect();
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
    <div className={s.searchContainer}>
      <div className={s.wrapper}>
        <form
          className={s.form}
          onSubmit={evt => {
            handleFormSubmit(evt);
          }}
        >
          <div className={classOpen} onClick={handleToggleSelect}>
            <input className={s.inputParam} type="text" placeholder="Параметр" value={searchParam.name} onChange={handleChangeSearchParamInput} />
            <ul className={s.selectList}>
              {foundedData.map(item => (
                <li
                  key={item.name}
                  className={s.selectItem}
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

          <div className={s.customFounder}>
            <input
              className={s.inputFounder}
              type="text"
              name="searchQuery"
              value={searchQuery}
              placeholder="Пошук"
              onChange={evt => {
                onInputChange(evt);
              }}
            />
          </div>

          <button className={s.button} type="submit">
            <SvgIcon iconId="search" size="24px" />
          </button>
        </form>
      </div>
    </div>
  );
};

BlockSearch.propTypes = {};

export default BlockSearch;
