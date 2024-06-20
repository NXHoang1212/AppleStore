import { useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';

const useStatusBarConfig = (
    barStyle: 'default' | 'light-content' | 'dark-content',
    backgroundColor: string,
    translucent: boolean = false
) => {
    useLayoutEffect(() => {
        StatusBar.setBarStyle(barStyle);
        StatusBar.setBackgroundColor(backgroundColor);
        StatusBar.setTranslucent(translucent);

        return () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
        };
    }, [barStyle, backgroundColor, translucent]);
};

export default useStatusBarConfig;
