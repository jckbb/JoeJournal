import {
  keyTypes,
  deleteAllStorage,
  readStorageItem,
  createMultipleStorageItems,
  createStorageItem,
} from './index';

export const setBean = async (data) => {
  const beanList = await getBeans();

  const jsonBeansData = JSON.stringify([data, ...beanList]);

  await createStorageItem(keyTypes.BEAN, jsonBeansData).catch((e) => {
    console.log(e);
  });
};

export const getBeans = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BEAN);

  if (!jsonResponse) return [];

  return JSON.parse(jsonResponse);
};

export const setLog = async (data, record) => {
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
