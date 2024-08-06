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
import { handleLinking } from './src/utils/HandleLinking';
import { navigationRef } from './src/stack/RootNavigationRef';
import { HOST } from './src/constant/Host';

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
          const type = remoteMessage.data.type;
          let url = '';
          if (type === 'orderSuccess' || type === 'orderFailed') {
            url = `${HOST.DOMAIN}/StackMisc/notification`;
          } else {
            url = `${HOST.DOMAIN}/StackMisc/getdetail/${remoteMessage.data.id}`;
          }
          handleLinking(url);
          console.log('getInitialNotification', remoteMessage.data.id);
          console.log('getInitialNotification', remoteMessage.data.type);
        }
      });
    notifee.onForegroundEvent(async ({ type, detail }: any) => {
      if (type === EventType.ACTION_PRESS || type === EventType.PRESS) {
        const id = detail.notification.data.id;
        const type = detail.notification.data.type;
        if (type === 'orderSuccess' || type === 'orderFailed') {
          navigationRef.current?.navigate('StackMisc', { screen: 'Notification' } as any);
        } else {
          navigationRef.current?.navigate('StackMisc', { screen: 'DetailArticle', params: { _id: id } } as any);
        }
        console.log('onForegroundEvent', detail.notification.data.id);
        console.log('onForegroundEvent', detail.notification.data.type);
      }
    });
    notifee.onBackgroundEvent(async ({ type, detail }: any) => {
      if (type === EventType.ACTION_PRESS || type === EventType.PRESS) {
        const type = detail.notification.data.type;
        const id = detail.notification.data.id;
        let url = '';
        if (type === 'orderSuccess' || type === 'orderFailed') {
          url = `${HOST.DOMAIN}/StackMisc/notification`;
        } else {
          url = `${HOST.DOMAIN}/StackMisc/getdetail/${id}`;
        }
        handleLinking(url);
        console.log('onBackgroundEvent', detail.notification.data.id);
        console.log('onBackgroundEvent', detail.notification.data.type);
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
