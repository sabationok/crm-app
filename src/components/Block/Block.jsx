import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockModal from './BlockModal/BlockModal';

import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './Block.module.scss';

const Block = props => {
  let {
    children,
    footerChildren,
    title = 'Title',
    iconId = 'info',
    footer = true,
    header = true,
    style = {},
    headerStyles = {},
    className = '',
  } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState();
  const { isDarkTheme } = useSelector(getAppSettings);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');

  function handleToggleBlockSearch() {
    setIsSearch(!isSearch);
  }
  function handleToggleEditForm() {
    setIsFormDisabled(!isFormDisabled);
  }
  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const state = {
    isSearch,
    isFormDisabled,
    isDarkTheme,
    isModalOpen,
  };
  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleEditForm,
    handleToggleModal,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...stateHandlers} {...state}>
        <div className={blockClassName} style={style}>
          {header && <BlockHeaderSearch style={headerStyles} />}

          <div className={s.content} id={iconId}>
            <div className={s.overflow}>
              {children}

              {!children && (
                <div className={s.inWork}>
                  <span>In work ...</span>
                </div>
              )}
            </div>
            <BlockModal />
          </div>

          {footer && <div className={s.footer}>{footerChildren}</div>}
        </div>
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default Block;
