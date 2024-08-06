/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { handleLinking } from './src/utils/HandleLinking';
import { HOST } from './src/constant/Host';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    const type = remoteMessage.data.type;
    let url = '';
    if (type === 'orderSuccess' || type === 'orderFailed') {
        url = `${HOST.DOMAIN}/StackMisc/notification`;
    } else {
        url = `${HOST.DOMAIN}/StackMisc/getdetail/${remoteMessage.data.id}`;
    }
    handleLinking(url);
    console.log('Message handled in the background!', remoteMessage);
});

messaging().onNotificationOpenedApp(remoteMessage => {
    const type = remoteMessage.data.type;
    let url = '';

    if (type === 'orderSuccess' || type === 'orderFailed') {
        url = `${HOST.DOMAIN}/StackMisc/notification`;
    } else {
        url = `${HOST.DOMAIN}/StackMisc/getdetail/${remoteMessage.data.id}`;
    }

    handleLinking(url);
    console.log('Message handled in the foreground!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
