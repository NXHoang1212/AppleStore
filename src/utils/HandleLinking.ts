
import { Linking } from "react-native"

export const handleLinking = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}