export const fromTimestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const year = date.getFullYear();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${month}-${day}-${year}`;
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

export const fromSecondsToMinutes = (seconds) => {
  if (seconds <= 0) return '00:00sec';

  let unitType = 'sec';
  const minutes = Math.floor(seconds / 60);
  let leftOverSeconds = '00';

  if (minutes >= 1) {
    unitType = 'min';
    const leftOvers = seconds - minutes * 60;

    leftOverSeconds =
      leftOvers > 0
        ? leftOvers < 10
          ? `0${leftOvers}`
          : `${leftOvers}`
        : '00';
  }

  leftOverSeconds =
    minutes <= 0 ? seconds : leftOverSeconds > 0 ? leftOverSeconds : '00';

  return `${minutes < 10 && 0}${minutes}:${leftOverSeconds}${unitType}`;
};