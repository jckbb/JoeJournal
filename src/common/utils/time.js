export const fromTimestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
};

export const fromTimestampToTimeOfDay = (timestamp) => {
  const date = new Date(timestamp);
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hour >= 12 ? 'pm' : 'am';

  if (hour > 12) {
    hour = hour - 12;
  }

  return `${hour}:${minutes < 10 ? `0${minutes}` : minutes}${ampm}`;
};
