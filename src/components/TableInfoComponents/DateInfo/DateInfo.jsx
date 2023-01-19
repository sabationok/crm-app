import React from 'react';

const DateInfo = ({ dateString, date = true, time = true, dateClassName = '', timeClassName = '' }) => {
  let year, month, day, hours, minutes, seconds;
  if (dateString) {
    const date = new Date(dateString);

    year = date.getFullYear().toString().padStart(2, 0);
    month = (date.getMonth() + 1).toString().padStart(2, 0);
    day = date.getDate().toString().padStart(2, 0);
    hours = date.getHours().toString().padStart(2, 0);
    minutes = date.getMinutes().toString().padStart(2, 0);
    seconds = date.getSeconds().toString().padStart(2, 0);
  }

  return (
    <>
      {date && (
        <span title={`${day}.${month}.${year} (${hours}:${minutes}:${seconds})`} className={dateClassName}>
          {dateString ? `${day}.${month}.${year}` : `00.00.0000`}
        </span>
      )}

      {time && <span className={timeClassName}>{dateString ? `(${hours}:${minutes}:${seconds})` : `(00:00:00)`}</span>}
    </>
  );
};

export default DateInfo;
