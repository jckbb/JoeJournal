import {
  methodData,
  methodByName,
  grinderData,
  grinderByName,
} from '../../common/res/strings';
import {fieldType} from './index';

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

export const drawerListItemContent = (optionData, selectedOption) => {
  switch (selectedOption) {
    case fieldType.BEAN:
      return `${optionData.roaster} - ${optionData.origin}`;
    case fieldType.METHOD:
      return methodData[optionData].displayName;
    case fieldType.GRINDER:
      return grinderData[optionData].displayName;
    default:
      return optionData;
  }
};

export const createBrewId = ({bean, method, grinder}) =>
  `${bean.value.roaster.toLowerCase()}_${bean.value.origin.toLowerCase()}_${method.value.toLowerCase()}_${grinder.value.toLowerCase()}`;
