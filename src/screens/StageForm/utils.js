export const stageFormValidation = (stage, currentStage) => {
  let isFormValid = true;

  for (const field in stage[currentStage]) {
    if (field === 'description') continue;

    const {hasError} = stage[currentStage][field];

    if (hasError) {
      isFormValid = false;
      break;
    }
  }

  return isFormValid;
};

export const convertFormDataToRecord = (stages) => {
  let result = [];

  for (const stageId in stages) {
    const stage = stages[stageId];
    let stageData = {};
    for (const field in stage) {
      const {value} = stage[field];

      stageData = {
        ...stageData,
        [field]: value,
      };
    }

    result = [...result, stageData];
  }

  return result;
};
