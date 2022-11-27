import React from 'react';

import s from './BlockActions.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ActionCopy from './ActionCopy';
import ActionShare from './ActionShare';
import ActionPrint from './ActionPrint';
import ActionPrimary from './ActionPrimary';

const BlockActionsList = ({ arr = [] }) => {
  const actionsMap = {
    link: ActionPrimary,
    search: ActionPrimary,
    filter: ActionPrimary,
    copy: ActionCopy,
    share: ActionShare,
    refresh: ActionPrimary,
    edit: ActionPrimary,
    delete: ActionPrimary,
    create: ActionPrimary,
    print: ActionPrint,
    export: ActionPrimary,
    import: ActionPrimary,
  };
  let Action = <></>;
  return (
    <ul className={s.actionsList}>
      {arr.map(action => {
        if (action.name) {
          Action = actionsMap[action.name];
          console.log(Action);
          return (
            <li key={action.name} className={s.listItem}>
              <Action title={action.title} status={action.status} iconId={action.iconId} />
            </li>
          );
        }
        return (
          <li key={action.name} className={s.listItem}>
            <ButtonIcon size="100%" iconId="close" />
          </li>
        );
      })}
    </ul>
  );
};

export default BlockActionsList;
