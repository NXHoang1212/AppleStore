import RootStack from './src/stack/RootStack';
import { Provider as ProviderRedux } from 'react-redux';
import StoreRedux, { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { handleLinking } from './src/utils/HandleLinking';
import { navigationRef } from './src/stack/RootNavigationRef';

function App(): React.JSX.Element {

  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        sound: 'default',
        importance: AndroidImportance.HIGH,
        badge: true,
      });
      await notifee.displayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        android: {
          channelId,
          smallIcon: 'ic_launcher_round',
          importance: AndroidImportance.HIGH,
          autoCancel: true,
        },
        data: {
          id: remoteMessage.data?.id || '',
        },
      });
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage: any) => {
        if (remoteMessage) {
          const id = remoteMessage.data.id;
          handleLinking(`https://devnextstore.netlify.app/StackMisc/getdetail/${id}`);
        }
      });
    notifee.onForegroundEvent(async ({ type, detail }: any) => {
      if (type === EventType.ACTION_PRESS || type === EventType.PRESS) {
        const id = detail.notification.data.id;
        navigationRef.current?.navigate('StackMisc', { screen: 'DetailArticle', params: { _id: id } } as any);
      }
    });
    notifee.onBackgroundEvent(async ({ type, detail }: any) => {
      if (type === EventType.ACTION_PRESS || type === EventType.PRESS) {
        const id = detail.notification.data.id;
        handleLinking(`https://devnextstore.netlify.app/StackMisc/getdetail/${id}`);
      }
    });
    return () => {
      notifee.cancelAllNotifications();
    }
  }, [])
  return (
    <ProviderRedux store={StoreRedux}>
      <PersistGate persistor={persistor} loading={null}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <RootStack />
            <Toast position="top" />
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </ProviderRedux>
  );
}

export default App;
