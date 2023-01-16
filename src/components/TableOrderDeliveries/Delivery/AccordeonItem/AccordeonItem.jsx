import { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './AccordeonItem.module.scss';

const AccordeonItem = ({ children, title = 'інфромація' }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen ? s.isOpenItem : s.isCloseItem}>
      <ButtonIcon iconId="select-arrow" className={s.btn} iconClassName={s.icon} onClick={handleToggleOpen}>
        {title}
      </ButtonIcon>

      <div className={s.contentBox}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default AccordeonItem;
