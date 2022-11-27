import React from 'react';

import s from './BlockActions.module.scss';
import ActionCopy from './ActionCopy';
import ActionShare from './ActionShare';
import ActionPrint from './ActionPrint';
import ActionExport from './ActionExport';
import ActionImport from './ActionImport';
import ActionFilter from './ActionFilter';
import ActionLink from './ActionLink';
import ActionSearch from './ActionSearch';
import ActionEdit from './ActionEdit';
import ActionCreate from './ActionCreate';
import ActionDelete from './ActionDelete';
import ActionRefresh from './ActionRefresh';
import ActionPrimary from './ActionPrimary';

const BlockActionsList = ({ arr = [] }) => {
  const actionsMap = {
    link: ActionLink,
    search: ActionSearch,
    filter: ActionFilter,
    copy: ActionCopy,
    share: ActionShare,
    print: ActionPrint,
    export: ActionExport,
    import: ActionImport,
    edit: ActionEdit,
    delete: ActionDelete,
    create: ActionCreate,
    refresh: ActionRefresh,
  };
  let Action = <></>;
  return (
    <ul className={s.actionsList}>
      {arr.map(action => {
        if (action.name) {
          Action = actionsMap[action.name];

          return (
            <li key={action.name} className={s.listItem}>
              <Action action={action} {...action} />
            </li>
          );
        }
        return (
          <li key={action.name} className={s.listItem}>
            <ActionPrimary {...action} />
          </li>
        );
      })}
    </ul>
  );
};

export default BlockActionsList;
