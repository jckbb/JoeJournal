import {
  keyTypes,
  deleteAllStorage,
  readStorageItem,
  createStorageItem,
} from './index';

export const checkSetupIdExists = async (id) => {
  const jsonResponse = await readStorageItem(keyTypes.BREW, id);

  if (!jsonResponse) return false;

  const brews = JSON.parse(jsonResponse);

  return brews[id] !== undefined;
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

export const setBrew = async (id, data) => {
  const brewsData = await getBrews();
  const jsonBrewsData = JSON.stringify({
    ...brewsData,
    [id]: data,
  });

  await createStorageItem(keyTypes.BREW, jsonBrewsData).catch((error) => {
    console.log(error);
  });
};

export const getBrews = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BREW);

  if (!jsonResponse) return null;

  return JSON.parse(jsonResponse);
};

export const getBrew = async (id) => { // id - bean_method_grinder
  const jsonResponse = await readStorageItem(keyTypes.BREW);

  if (!jsonResponse) return null;

  const brewData = JSON.parse(jsonResponse);

  return brewData[id];
};

export const getPreviousBrewForm = async () => {
  const jsonResponse = await readStorageItem(keyTypes.BREW_FORM);

  if (!jsonResponse) return null;

  return JSON.parse(jsonResponse);
};

export const wipeStorage = async () => {
  await deleteAllStorage();
};

export const changeBrewIncrementDial = async (id, increment) => {
  const brews = await getBrews();
  const brew = {...brews[id]};

  brew.dial = brew.dial + increment;
  brews[id] = brew;

  const jsonLogs = JSON.stringify(brews);
  await createStorageItem(keyTypes, jsonLogs);
};
