import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Button } from 'react-native';
import { strings } from '../config';
import { AppButton } from './components';
import { getKeys, storeKeys, setIsLoggedIn } from './store';

const s = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  contentContainer: { alignItems: 'center' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(defaultKeys);

  const { reset } = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getKeys();
      setData(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  const updateData = useCallback(
    (key, value) => {
      const newset = { ...data, [key]: value };
      setData(newset);
      storeKeys(newset);
    },
    [setData, data]
  );

  const onLogout = async () => {
    await setIsLoggedIn('');
    reset({
      index: 0,
      routes: [
        {
          name: 'OnboardingOne',
        },
      ],
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" style={s.loading} />;
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.contentContainer}>
      <AppButton state={data[1]} updateData={updateData} buttonKey={1} />
      <AppButton state={data[2]} updateData={updateData} buttonKey={2} />
      <AppButton state={data[3]} updateData={updateData} buttonKey={3} />
      <AppButton state={data[4]} updateData={updateData} buttonKey={4} />
      <AppButton state={data[5]} updateData={updateData} buttonKey={5} />
      <AppButton state={data[6]} updateData={updateData} buttonKey={6} />
      <AppButton state={data[7]} updateData={updateData} buttonKey={7} />
      <AppButton state={data[8]} updateData={updateData} buttonKey={8} />
      <AppButton state={data[9]} updateData={updateData} buttonKey={9} />
      <AppButton state={data[10]} updateData={updateData} buttonKey={10} />

      <Button title={strings.logout} onPress={onLogout} />
    </ScrollView>
  );
};

export default Home;
