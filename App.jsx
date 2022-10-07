import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>App.js</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
