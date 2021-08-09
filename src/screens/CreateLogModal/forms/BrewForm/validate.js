export default (data) => {
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
