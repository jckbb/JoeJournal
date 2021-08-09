export const createRecord = (data, totals) => {
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
  };
};
