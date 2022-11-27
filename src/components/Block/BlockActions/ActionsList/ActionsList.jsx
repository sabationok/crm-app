import React from 'react';

import ActionCopy from './Actions/ActionCopy';
import ActionShare from './Actions/ActionShare';
import ActionPrint from './Actions/ActionPrint';
import ActionExport from './Actions/ActionExport';
import ActionImport from './Actions/ActionImport';
import ActionFilter from './Actions/ActionFilter';
import ActionLink from './Actions/ActionLink';
import ActionSearch from './Actions/ActionSearch';
import ActionEdit from './Actions/ActionEdit';
import ActionCreate from './Actions/ActionCreate';
import ActionDelete from './Actions/ActionDelete';
import ActionRefresh from './Actions/ActionRefresh';
import ActionPrimary from './Actions/ActionPrimary';

import s from './ActionsList.module.scss';

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
