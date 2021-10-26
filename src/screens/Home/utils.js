export const convertFormDataToRecord = (data) => {
  let record = {};

  for (const field in data) {
    record = {
      ...record,
      [field]: data[field].value,
    };
  }

  return record;
};
