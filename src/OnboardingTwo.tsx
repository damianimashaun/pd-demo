import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { strings } from '../config';
import { Onboarding } from './components';

const OnboardingTwo = () => {
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate('OnboardingThree');
  };

  return <Onboarding title={strings.onboardingTwo} onNext={onPress} />;
};

export default OnboardingTwo;
