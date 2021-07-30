import AsyncStorage from '@react-native-async-storage/async-storage';

export const keyTypes = {
  LOGS: 'logs',
  LAST_LOG: 'lastLog',
  BREW_FORM: 'brewForm',
};

export const createMultipleStorageItems = async (pairSetData) => {
  try {
    return await AsyncStorage.multiSet(pairSetData);
  } catch (error) {
    throw error;
  }
};

export const createStorageItem = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

export const readStorageItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    throw error;
  }
};

export const readAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    throw error;
  }
};

export const deleteAllStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
};
