import React from 'react';

const DateInfo = ({ dateString }) => {
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

  return <>{dateString ? `${year}.${month}.${day} (${hours}:${minutes}:${seconds})` : `0000.00.00 (00:00:00)`}</>;
};

export default DateInfo;
