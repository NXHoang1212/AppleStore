import { PermissionsAndroid } from "react-native";

export const Permission = async (): Promise<boolean> => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (
            granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the camera');
            return true;
        } else {
            console.log('Camera permission denied');
            return false;
        }
    } catch (err) {
        return false;
    }
};