export const getDateFromTimestamp = (timestamp) => {
  let result = '';
  const date = new Date(timestamp);
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  result = `${month}-${day}-${date.getFullYear()}`;

  return result;
};
