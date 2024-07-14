import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import RootStack from './src/stack/RootStack';
import { Provider as ProviderRedux } from 'react-redux';
import StoreRedux, { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import Toast from 'react-native-toast-message';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <ProviderRedux store={StoreRedux}>
      <PersistGate persistor={persistor} loading={null}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <RootStack />
            <Toast position='top' />
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </ProviderRedux>
  );
}

export default App;
