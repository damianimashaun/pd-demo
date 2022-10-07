import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { strings } from '../config';
import { Onboarding } from './components';
import { isLoggedIn } from './store';

const s = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

const OnboardingOne = () => {
  const [loading, setLoading] = useState(true);
  const { reset } = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthorized = await isLoggedIn();
      if (isAuthorized) {
        reset({
          index: 0,
          routes: [
            {
              name: 'Home',
            },
          ],
        });
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const { navigate } = useNavigation();

  const onPress = () => {
    navigate('OnboardingTwo');
  };

  if (loading) {
    return <ActivityIndicator size="large" style={s.loading} />;
  }

  return <Onboarding title={strings.onboardingOne} onNext={onPress} />;
};

export default OnboardingOne;
