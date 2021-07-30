import {
  keyTypes,
  deleteAllStorage,
  readStorageItem,
  createMultipleStorageItems,
} from './index';

export const setLog = async (data, callback) => {
  const record = await createBrewRecord(data);
  const logs = await getLogs();
  const jsonData = JSON.stringify(data);
  const jsonLogsData = JSON.stringify([record, ...logs]);

  const pairSets = [
    [keyTypes.LOGS, jsonLogsData],
    [keyTypes.BREW_FORM, jsonData],
  ];

  await createMultipleStorageItems(pairSets).catch((error) => {
    console.log(error);
  });
};

export const getLogs = async () => {
  const jsonResponse = await readStorageItem(keyTypes.LOGS);

  if (!jsonResponse) return [];

  return JSON.parse(jsonResponse);
};

export const getPreviousBrewForm = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BREW_FORM);

  if (!jsonResponse) return null;

  return JSON.parse(jsonResponse);
};

export const wipeStorage = async () => {
  await deleteAllStorage();
};

const createBrewRecord = (data) => {
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
    createdAt: new Date().getTime(),
  };
};
