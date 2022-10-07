import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { strings } from '../config';
import { Onboarding } from './components';

const OnboardingThree = () => {
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate('Login');
  };

  return <Onboarding title={strings.onboardingThree} onNext={onPress} />;
};

export default OnboardingThree;
