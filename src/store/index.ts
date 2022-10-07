import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = '@storage_auth';
const KEYS_KEY = '@storage_key';
const defaultKeys = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
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
