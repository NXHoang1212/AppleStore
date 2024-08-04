/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { handleLinking } from './src/utils/HandleLinking';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    handleLinking(`https://devnextstore.netlify.app/StackMisc/getdetail/${remoteMessage.data.id}`);
});

messaging().onNotificationOpenedApp(remoteMessage => {
    handleLinking(`https://devnextstore.netlify.app/StackMisc/getdetail/${remoteMessage.data.id}`);
})

AppRegistry.registerComponent(appName, () => App);
