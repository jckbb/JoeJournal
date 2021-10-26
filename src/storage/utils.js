import {
  keyTypes,
  deleteAllStorage,
  readStorageItem,
  createMultipleStorageItems,
  createStorageItem,
} from './index';

export const checkSetupIdExists = async (id) => {
  const jsonResponse = await readStorageItem(keyTypes.LOG, id);

  if (!jsonResponse) return false;

  const logs = JSON.parse(jsonResponse);

  return logs[id] !== undefined;
};

export const setBean = async (data) => {
  const beanList = await getBeans();

  const jsonBeansData = JSON.stringify([...beanList, data]);

  await createStorageItem(keyTypes.BEAN, jsonBeansData).catch((e) => {
    console.log(e);
  });
};

export const getBeans = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BEAN);

  if (!jsonResponse) return [];

  return JSON.parse(jsonResponse);
};

export const setLog = async (id, data) => {
  const logsData = await getLogs();
  const jsonLogsData = JSON.stringify({
    ...logsData,
    [id]: data,
  });

  console.log('json logs:', jsonLogsData);

  await createStorageItem(keyTypes.LOG, jsonLogsData).catch((error) => {
    console.log(error);
  });
};

export const getLogs = async () => {
  const jsonResponse = await readStorageItem(keyTypes.LOG);

  if (!jsonResponse) return null;

  return JSON.parse(jsonResponse);
};

export const getLog = async (id) => { // id - bean_method_grinder
  const jsonResponse = await readStorageItem(keyTypes.LOG);

  if (!jsonResponse) return null;

  const logData = JSON.parse(jsonResponse);

  return logData[id];
};

export const getPreviousBrewForm = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BREW_FORM);

  if (!jsonResponse) return null;

  return JSON.parse(jsonResponse);
};

export const wipeStorage = async () => {
  await deleteAllStorage();
};
