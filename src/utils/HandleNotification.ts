import messaging from '@react-native-firebase/messaging';
import { updateToken } from '../redux/slices/Auth.Slice';
import { HandleUpdateFcmToken } from '../service/Api/IndexUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HandleNotification {
    static checkNotificationPermission = async (user: any, dispatch: any) => {
        try {
            const authStatus = await messaging().requestPermission();
            if (authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
                await this.getFcmToken(user, dispatch);
            }
        } catch (error) {
            console.log('Failed to request notification permission:', error);
        }
    }

    static getFcmToken = async (user: any, dispatch: any) => {
        try {
            const storedFcmToken = await AsyncStorage.getItem('fcmToken');
            const currentFcmToken = await messaging().getToken();
            console.log("🚀 ~ HandleNotification ~ getFcmToken= ~ currentFcmToken:", currentFcmToken)
            if (currentFcmToken !== storedFcmToken) {
                await AsyncStorage.setItem('fcmToken', currentFcmToken);
                this.updateTokenForUser(currentFcmToken, user, dispatch);
            }
            else if (!storedFcmToken) {
                this.updateTokenForUser(currentFcmToken, user, dispatch);
            } else {
                console.log('Token is up to date, no update required.');
            }
        } catch (error) {
            console.log('Failed to get FCM token:', error);
        }
    }

    static updateTokenForUser = async (token: string, user: any, dispatch: any) => {
        if (user && user._id) {
            try {
                const response = await HandleUpdateFcmToken(user._id, token);
                if (response.status === 200) {
                    dispatch(updateToken(token));
                }
            } catch (error) {
                console.log('Failed to update token for user:', user._id, error);
            }
        } else {
            console.log('No user info provided for token update.');
        }
    }

}

export default HandleNotification;