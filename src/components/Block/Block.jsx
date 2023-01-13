import React, { useRef, useState, memo } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
// import BlockModal from './BlockModal/BlockModal';
import BlockActions from './BlockActions/BlockActions';

import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './Block.module.scss';
import BlockActionsProvider from './BlockActions/BlockActionsProvider';

const Block = props => {
  let {
    children,
    footerChildren,
    title = 'Title',
    iconId = 'info',
    footer = true,
    header = true,
    style = {},
    className = '',
    overflowHidden = false,
  } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullPageMode, setIsFullPageMode] = useState(false);
  // const [isActionsOpen, setIsActionsOpen] = useState(false);
  const { isDarkTheme } = useSelector(getAppSettings);
  const printRef = useRef();

  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');
  const fullPageGrid = isFullPageMode ? { gridColumn: '1/11', gridRow: '1/11', zIndex: '60' } : {};

  function handleToggleBlockSearch() {
    setIsSearch(!isSearch);
  }
  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  // function handleToggleAction() {
  //   setIsActionsOpen(!isActionsOpen);
  // }
  function handleToggleFullPageMode() {
    setIsFullPageMode(!isFullPageMode);
  }

  const state = {
    isSearch,
    isDarkTheme,
    isModalOpen,
    isFullPageMode,
    printRef,
  };

  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleModal,
    handleToggleFullPageMode,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...{ ...props, ...stateHandlers, ...state }}>
        <BlockActionsProvider {...props}>
          <div className={blockClassName} style={{ ...style, ...fullPageGrid }}>
            {header && <BlockHeaderSearch />}

            <div className={s.content} id={iconId}>
              <BlockActions />

              <div className={overflowHidden ? s.overflowHidden : s.overflowAuto}>
                {children}

                {!children && (
                  <div className={s.inWork}>
                    <span>In work ...</span>
                  </div>
                )}
              </div>
            </div>
            {footer && <div className={[s.footer, 'theme'].join(' ')}>{footerChildren}</div>}
          </div>
        </BlockActionsProvider>
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default memo(Block);
