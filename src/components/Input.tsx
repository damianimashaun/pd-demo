import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../config';

const s = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    width: 300,
    fontSize: 24,
    lineHeight: 28,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  title: {
    marginBottom: 10,
  },
  error: {
    marginTop: 5,
    color: colors.red,
    fontSize: 12,
    paddingLeft: 5,
  },
});

type TInput = {
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isSecure?: boolean;
  error?: string;
  disabled: boolean;
};

const Input = ({ title, value, setValue, isSecure, error, disabled }: TInput) => {
  useEffect(() => {}, []);

  return (
    <View style={s.container}>
      <Text style={s.title}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={s.input}
        placeholder={title}
        secureTextEntry={isSecure}
        editable={!disabled}
      />
      {!!error && <Text style={s.error}>{error}</Text>}
    </View>
  );
};

export default Input;
