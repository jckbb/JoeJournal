export const fromTimestampToReadableDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hour = date.getHours();
  const minutes = date.getMinutes();
  let ampm = 'am';

  if (hour > 12) {
    hour = hour - 12;
    ampm = 'pm';
  }

  return `${month}/${day} ${hour}:${minutes}${ampm}`;
};
