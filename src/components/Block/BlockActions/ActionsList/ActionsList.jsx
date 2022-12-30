import React from 'react';

import ActionCopy from '../Actions/ActionCopy';
import ActionShare from '../Actions/ActionShare';
import ActionPrint from '../Actions/ActionPrint';
import ActionExport from '../Actions/ActionExport';
import ActionImport from '../Actions/ActionImport';
import ActionFilter from '../Actions/ActionFilter';
import ActionLink from '../Actions/ActionLink';
import ActionSearch from '../Actions/ActionSearch';
import ActionEdit from '../Actions/ActionEdit';
import ActionCreate from '../Actions/ActionCreate';
import ActionDelete from '../Actions/ActionDelete';
import ActionRefresh from '../Actions/ActionRefresh';
import ActionPrimary from '../Actions/ActionPrimary';
import ActionTogglePostVisibility from '../Actions/ActionTogglePostVisibility';

// import s from './ActionsList.module.scss';

const BlockActionsList = ({ arr = [] }) => {
  if (typeof arr !== 'object') {
    return;
  }
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
    visibility: ActionTogglePostVisibility,
  };

  return (
    <>
      {arr.map(action => {
        console.log(action.iconId);
        if (actionsMap[action.name]) {
          let Action = actionsMap[action.name];

          action.style = { width: '80px', height: '60px' };

          return <Action key={action.id} action={action} {...action} />;
        }

        return <ActionPrimary key={action.id} {...action} />;
      })}
    </>
  );
};

export default BlockActionsList;
