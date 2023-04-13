import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistedStore, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
