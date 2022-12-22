import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './Status.module.scss';
const Status = ({ status }) => {
  const statusName = {
    success: 'Прийнято',
    pending: 'Очікує',
    rejected: 'Відхилено',
    visible: 'Видимий',
    hidden: 'Прихований',
    available: 'У наявності',
    notAvailable: 'Відсутній',
    awaitingOnStock: 'Очікується',
    isCommission: 'Комісійний',
    isStandart: 'Стандарт',
    iban: 'IBAN',
    card: 'CARD',
    payAfter: 'Післяплата',
    payed: 'Оплачено',
    fullRefund: 'Повернення',
    orderSuccess: 'Успішно',
    orderFailed: 'Не успішно',
    hasRefund: 'Містить повернення',
    needRefund: 'Повернути',
    doneRefund: 'Повернено',
    pendingRefund: 'NEED REFUND',
    inWork: 'У роботі',
    new: 'Нове',
    inRoad: 'У дорозі',
    inProcess: 'У процесі',
    accepted: 'Прийнято',
    mixed: 'Змішано',
    express: 'Експрес',
    curier: "Кур'єр",
    standart: 'Стандарт',
    problem: 'Проблема',
    resolving: 'Вирішується',
    default: 'Без статусу',
  };
  const iconId = {
    success: 'success',
    pending: 'time',
    rejected: 'error',
    visible: 'visibility-on',
    hidden: 'visibility-off',
    available: 'success',
    notAvailable: 'clear',
    awaitingOnStock: 'time',
    isCommission: 'success',
    isStandart: 'success',
    problem: 'error',
    resolving: 'warning',
    new: 'info',
    inWork: 'info',
    inRoad: 'info',
    inProcess: 'info',
    standart: 'info',
    accepted: 'success',
    fullRefund: 'warning',
    mixed: 'error',
    doneRefund: 'success',
    hasRefund: 'return',
    hasChange: 'change',
    payed: 'success',
    iban: 'bank',
    card: 'card-ok',
    payAfter: 'time',
    express: 'info',
    curier: 'info',
    orderSuccess: 'success',
    pendingRefund: 'NEED REFUND',
    default: 'info',
  };

  const compStatus = statusName[status] ? status : 'default';
  const className = [s.statusBox, s[compStatus]].join(' ');

  return (
    <div className={className} title={statusName[compStatus]}>
      {iconId[compStatus] && <SvgIcon iconId={iconId[compStatus]} size="18px" />}
      <span className={s.inner}>{statusName[compStatus]}</span>
    </div>
  );
};

export default Status;
