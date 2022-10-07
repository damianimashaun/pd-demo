import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, strings } from '../config';
import { Input } from './components';
import { setIsLoggedIn } from './store';

const s = StyleSheet.create({
  flexOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {},
  buttonText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 5,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.black,
    width: 70,
    alignSelf: 'flex-end',
  },
  error: {
    color: colors.red,
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    paddingVertical: 10,
  },
});

const defaultErrors = {
  username: '',
  password: '',
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>(defaultErrors);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  const { reset } = useNavigation();

  const onSubmit = () => {
    setLoading(true);
    setFormError('');
    setErrors(defaultErrors);

    const formErrors = { ...defaultErrors };

    if (!username) {
      formErrors.username = strings.required;
    }

    if (!password) {
      formErrors.password = strings.required;
    }

    if (!formErrors.username && !formErrors.password) {
      // fake http call
      setTimeout(async () => {
        if (username === strings.aUser && password === strings.aPass) {
          // goto next
          await setIsLoggedIn('true');
          reset({
            index: 0,
            routes: [
              {
                name: 'Home',
              },
            ],
          });
        } else {
          setFormError(strings.incorrectCombination);
        }

        setLoading(false);
      }, 5000);
    } else {
      setErrors(formErrors);
      setLoading(false);
    }
  };

  return (
    <View style={s.flexOne}>
      <View>
        <Input
          title={strings.username}
          value={username}
          setValue={setUsername}
          error={errors.username}
          disabled={loading}
        />
        <Input
          title={strings.password}
          value={password}
          setValue={setPassword}
          error={errors.password}
          disabled={loading}
          isSecure
        />
        {!!formError && <Text style={s.error}>{formError}</Text>}
        <TouchableOpacity style={s.buttonContainer} onPress={onSubmit}>
          {loading && <ActivityIndicator size="small" style={s.loader} />}
          {!loading && <Text style={s.buttonText}>{strings.submit}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
