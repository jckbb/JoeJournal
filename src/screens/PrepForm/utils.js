export const convertFormDataToRecord = (data) => {
  let result = {};

  for (const field in data) {
    const {value} = data[field];

    result = {
      ...result,
      [field]: value,
    };
  }

  return result;
};
