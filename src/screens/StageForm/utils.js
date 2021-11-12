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
    stageData = {
      ...stageData,
      id: stageId,
    };
    result = [...result, stageData];
  }

  return result;
};

export const parseTimeToString = (seconds) => {
  let result = `${seconds}s`;

  if (seconds > 59) {
    const remainingSeconds = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    result = `${minutes < 10 ? `0${minutes}` : minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }min`;
  }

  return result;
};
