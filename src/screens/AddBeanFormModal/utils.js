export const convertStringToArray = (text) => {
  let result = [];

  result = text.split(', ');

  return result;
};

export const convertToUsableData = (data) => {
  let result = {};

  for (const field in data) {
    if (field === 'notes') {
      console.log(field, data[field]);
      console.log(field, data[field].value.split(', '));
      result = {
        ...result,
        [field]: data[field].value.split(', '),
      };
    } else {
      result = {
        ...result,
        [field]: data[field].value,
      };
    }
  }

  return result;
};
