import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = '@storage_auth';
const KEYS_KEY = '@storage_key';
const defaultKeys = {
  1: 'off',
  2: 'off',
  3: 'off',
  4: 'off',
  5: 'off',
  6: 'off',
  7: 'off',
  8: 'off',
  9: 'off',
  10: 'off',
};

const isLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_KEY);
    if (value !== null) {
      // value previously stored
      return !!value;
    }
  } catch (e) {
    // error reading value
  }

  return false;
};

const setIsLoggedIn = async (value) => {
  try {
    await AsyncStorage.setItem(AUTH_KEY, value);
  } catch (e) {
    // saving error
  }
};

const getKeys = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEYS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return {
      ...defaultKeys,
    };
  }
};

const storeKeys = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(KEYS_KEY, jsonValue);
  } catch (e) {
    // saving error
  }
};

export { getKeys, isLoggedIn, setIsLoggedIn, storeKeys };
