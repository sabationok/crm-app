import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockModal from './BlockModal/BlockModal';
import BlockActions from './BlockActions/BlockActions';

import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import { toast } from 'react-toastify';
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

  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');
  const fullPageGrid = isFullPageMode ? { gridColumn: '1/11', gridRow: '1/11', zIndex: '50' } : {};

  function handleToggleBlockSearch() {
    setIsSearch(!isSearch);
  }

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  function handleToggleAction() {
    setIsActionsOpen(!isActionsOpen);
  }

  function actionToglleFullPageMode() {
    setIsFullPageMode(!isFullPageMode);
    toast.info(`Вигляд блоку змінено ${isFullPageMode}`);
  }
  const state = {
    isSearch,
    isDarkTheme,
    isModalOpen,
    isFullPageMode,
    isActionsOpen,
  };
  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleModal,
    actionToglleFullPageMode,
    handleToggleAction,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...stateHandlers} {...state}>
        <div className={blockClassName} style={{ ...style, ...fullPageGrid }} id="test">
          {header && <BlockHeaderSearch style={headerStyles} />}

          <div className={s.content} id={iconId}>
            <BlockActions />

            <div className={!isActionsOpen ? s.overflow : s.hidden}>
              {children}

              {!children && (
                <div className={s.inWork}>
                  <span>In work ...</span>
                </div>
              )}
            </div>

            <BlockModal title={`Додаткові дії блоку "${title}"`}></BlockModal>
          </div>

          {footer && <div className={s.footer}>{footerChildren}</div>}
        </div>
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default Block;
