import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { strings } from '../config';
import { Onboarding } from './components';

const OnboardingOne = () => {
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate('OnboardingTwo');
  };

  return <Onboarding title={strings.onboardingOne} onNext={onPress} />;
};

export default OnboardingOne;
