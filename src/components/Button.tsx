import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { colors } from '../../config';

type TAppButton = {
  state: 'on' | 'off';
  buttonKey: number;
  updateData: (k: number, s: string) => void;
};

const s = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 100,
    marginVertical: 5,
  },
});

const AppButton = ({ state, buttonKey, updateData }: TAppButton) => {
  const buttonColor = state === 'on' ? colors.green : colors.red;
  const title = state === 'on' ? 'ON' : 'OFF';

  const onPress = () => {
    const value = state === 'on' ? 'off' : 'on';
    updateData(buttonKey, value);
  };

  return (
    <View style={s.button}>
      <Button title={title} color={buttonColor} onPress={onPress} />
    </View>
  );
};

export default AppButton;
