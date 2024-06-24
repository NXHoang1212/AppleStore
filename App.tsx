import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import RootStack from './src/stack/RootStack';
import { Provider as ProviderRedux } from 'react-redux';
import StoreRedux from './src/redux/Store';
import Toast from 'react-native-toast-message';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <ProviderRedux store={StoreRedux}>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootStack />
          <Toast position='top' />
        </GestureHandlerRootView>
      </PaperProvider>
    </ProviderRedux>
  );
}

export default App;
