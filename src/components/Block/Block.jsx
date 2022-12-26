import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
// import BlockModal from './BlockModal/BlockModal';
import BlockActions from './BlockActions/BlockActions';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullPageMode, setIsFullPageMode] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
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
  function handleToggleAction() {
    setIsActionsOpen(!isActionsOpen);
  }
  function handleToglleFullPageMode() {
    setIsFullPageMode(!isFullPageMode);
  }

  const state = {
    isSearch,
    isDarkTheme,
    isModalOpen,
    isFullPageMode,
    isActionsOpen,
    printRef,
  };

  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleModal,
    handleToglleFullPageMode,
    handleToggleAction,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} state={state} stateHandlers={stateHandlers} {...stateHandlers} {...state}>
        <div className={blockClassName} style={{ ...style, ...fullPageGrid }} id="test">
          {header && <BlockHeaderSearch style={headerStyles} />}

          <div className={s.content} id={iconId}>
            <BlockActions />

            <div className={s.overflow}>
              {children}

              {!children && (
                <div className={s.inWork}>
                  <span>In work ...</span>
                </div>
              )}
            </div>

            {/* <BlockModal title={`Додаткові дії блоку "${title}"`}></BlockModal> */}
          </div>

          {footer && <div className={[s.footer, 'theme'].join(' ')}>{footerChildren}</div>}
        </div>
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default Block;
