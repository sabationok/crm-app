import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockModal from './BlockModal/BlockModal';

import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './Block.module.scss';
import { toast } from 'react-toastify';

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
  const { isDarkTheme } = useSelector(getAppSettings);
  const [isFullPageMode, setIsFullPageMode] = useState(false);
  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');
  const fullPageGrid = isFullPageMode ? { gridColumn: '1/11', gridRow: '1/11', zIndex: '10' } : {};

  function handleToggleBlockSearch() {
    setIsSearch(!isSearch);
  }

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
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
  };
  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleModal,
    actionToglleFullPageMode,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...stateHandlers} {...state}>
        <div className={blockClassName} style={{ ...style, ...fullPageGrid }}>
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
