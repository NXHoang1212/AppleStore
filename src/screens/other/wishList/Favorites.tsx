import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../../constant/Icon';

import { InputCustom } from '../../../import/IndexComponent';
import { Responsive } from '../../../constant/Responsive';
import { IndexStyles } from '../../../import/IndexStyles';

const Favorites: React.FC = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState<string>('');
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const toggleSearch = () => {
        if (isSearchVisible) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start(() => setIsSearchVisible(false));
        } else {
            setIsSearchVisible(true);
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    };

    const headerHeight = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [Responsive.hp(10), Responsive.hp(2.5)],
    });

    const inputOpacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return (
        <View style={IndexStyles.StyleFavorites.container}>
            <Animated.View style={[IndexStyles.StyleFavorites.viewheader, { height: headerHeight, opacity: inputOpacity.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }) }]}>
                <View style={IndexStyles.StyleFavorites.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleFavorites.textHeader}>Lượt thích</Text>
                    <View style={IndexStyles.StyleFavorites.headerIcon}>
                        <TouchableOpacity onPress={toggleSearch}>
                            <Icon.SearchSVG width={25} height={25} fill='red' />
                        </TouchableOpacity>
                        <Image source={Icon.CART} style={{ width: 25, height: 25, tintColor: 'red' }} />
                    </View>
                </View>
            </Animated.View>
            {isSearchVisible && (
                <Animated.View style={[IndexStyles.StyleFavorites.viewSearch, { opacity: inputOpacity }]}>
                    <InputCustom
                        placeholder='Search'
                        value={search}
                        onChangeText={setSearch}
                        keyboardType='default'
                        style={IndexStyles.StyleFavorites.textInput}
                        icon={<Icon.SearchSVG width={19} height={19} fill='#E9515E' />}
                        autoFocus={true}
                    />
                    <TouchableOpacity onPress={toggleSearch}>
                        <Text style={IndexStyles.StyleFavorites.textRemove}>Thoát</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
            <View style={IndexStyles.StyleFavorites.containerBody}>
            </View>
        </View>
    );
};

export default Favorites;