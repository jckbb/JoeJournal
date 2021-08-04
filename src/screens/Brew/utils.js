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

export const validateForm = (data) => {
  let isFormValid = true;

  for (const key of Object.keys(data)) {
    switch (key) {
      case 'brewSplits':
        data[key].forEach((field, __) => {
          if (field.hasError) isFormValid = false;
        });
        break;
      default:
        const field = data[key];
        if (field.hasError) isFormValid = false;
        break;
    }
  }

  return isFormValid;
};

export const createBrewRecord = (data, totals) => {
  let record = {
    brewSplits: [],
  };

  for (const key of Object.keys(data)) {
    switch (key) {
      case 'brewSplits':
        data[key].forEach((field, __) => {
          const brewSplit = {
            duration: field.duration.value,
            stage: field.stage.value,
            waterAmount: field.waterAmount.value,
          };

          record = {
            ...record,
            brewSplits: [...record.brewSplits, brewSplit],
          };
        });
        break;
      default:
        const field = data[key];
        record = {
          ...record,
          [key]: field.value,
        };
        break;
    }
  }

  return {
    ...record,
    ...totals,
    createdAt: new Date().getTime(),
  };
};
