import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { strings, colors } from '../../config';

const s = StyleSheet.create({
  flexOne: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: 20,
    fontWeight: '900',
  },
  button: {
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 50,
  },
});

type TOnboarding = {
  title: string;
  onNext: () => void;
};

const Onboarding = ({ title, onNext }: TOnboarding) => (
  <View style={s.flexOne}>
    <View style={s.flexOne}>
      <Text style={s.text}>{title}</Text>
    </View>
    <TouchableOpacity style={s.button} onPress={onNext}>
      <Text>{strings.next}</Text>
    </TouchableOpacity>
  </View>
);

export default Onboarding;
