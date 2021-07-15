import AsyncStorage from '@react-native-async-storage/async-storage';

export const keyPrefix = {
  LOG: 'log',
};

export const createLog = async (keySuffix, data) => {
  const jsonData = JSON.stringify(data);
  const key = `${keyPrefix.LOG}_${keySuffix}`;

  try {
    return await AsyncStorage.setItem(key, jsonData);
  } catch (error) {
    throw error;
  }
};

export const readLogKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    throw error;
  }
};

export const readLogs = async () => {
  let keys = [];
  let data = {};
  try {
    const response = await AsyncStorage.multiGet(await readLogKeys());

    for (let i = 0; i < response.length; i++) {
      const key = response[i][0];
      const jsonData = response[i][1];
      keys = [...keys, key];
      data = {...data, [key]: JSON.parse(jsonData)};
    }

    return {keys: keys, data: data};
  } catch (error) {
    throw error;
  }
};
