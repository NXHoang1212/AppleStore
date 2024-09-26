import { View, Text, Image, Keyboard, TouchableOpacity, Animated, FlatList } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IndexStyles } from '../../../../import/IndexStyles';
import { Icon } from '../../../../constant/Icon';

import { CustomHeader, InputCustom } from '../../../../import/IndexComponent';
import { Responsive } from '../../../../constant/Responsive';
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig';

import { useAppSelector } from '../../../../import/IndexFeatures';
import { socket } from '../../../../utils/Socket.io-client';
import { ScrollView } from 'react-native-gesture-handler';

export interface Message {
    username: string;
    message: string;
    role: string
}

const ChatWithAdmin: React.FC = () => {

    useStatusBarConfig('dark-content', 'transparent', true);

    const user = useAppSelector(state => state.root.Auth.user);

    const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

    const iconOpacity = useRef(new Animated.Value(1)).current;

    const iconTranslateY = useRef(new Animated.Value(0)).current;

    const [messages, setMessages] = useState<Message[]>([]); // Danh sách tin nhắn

    const [message, setMessage] = useState(''); // Giá trị tin nhắn mới

    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        socket.connect();

        const room = user._id;

        socket.emit('joinRoom', { username: user.fullname, room, role: user.role });

        socket.on('adminMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        socket.on('userMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
            socket.off('adminMessage');
            socket.off('userMessage');
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        // Cuộn xuống cuối mỗi khi danh sách tin nhắn thay đổi
        scrollRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleImagePress = () => {
        setKeyboardVisible(false);
        Animated.parallel([
            Animated.timing(iconOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(iconTranslateY, {
                toValue: 100,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setTimeout(() => {
                Animated.parallel([
                    Animated.timing(iconOpacity, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(iconTranslateY, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                ]).start();
            }, 80);
        });

    };

    const sendMessage = () => {
        if (message.trim()) {
            const room = user._id;
            socket.emit('sendMessage', { username: user.fullname, message, room, role: user.role });
            setMessage(''); //
        }
    };

    return (
        <View style={IndexStyles.StyleChatWithAdmin.container}>
            <View style={IndexStyles.StyleChatWithAdmin.viewheader}>
                <View style={IndexStyles.StyleChatWithAdmin.headerTitle}>
                    <CustomHeader title="Trò chuyện với tôi" color="red" fontSize={Responsive.RFPercentage(2.6)} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                ref={scrollRef}
            >
                <View style={IndexStyles.StyleChatWithAdmin.containerBody}>
                    <View style={IndexStyles.StyleChatWithAdmin.viewBody}>
                        <FlatList
                            data={messages}
                            renderItem={({ item }) => (
                                <View style={[
                                    IndexStyles.StyleChatWithAdmin.viewItem,
                                    {
                                        alignSelf: item.role === 'user' ? 'flex-end' : 'flex-start', // Phân biệt bằng role
                                        backgroundColor: item.role === 'user' ? '#DCF8C6' : '#FFF', // Màu khác nhau cho user và admin
                                        justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start', // Hiển thị tin nhắn của user bên phải, admin bên trái
                                        alignItems: item.role === 'user' ? 'flex-end' : 'flex-start', // Hiển thị tin nhắn của user bên phải, admin bên trái

                                    },
                                ]}>
                                    <Text style={IndexStyles.StyleChatWithAdmin.textMessage}>{item.message}</Text>
                                    <Text style={IndexStyles.StyleChatWithAdmin.textName}>{item.username}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={IndexStyles.StyleChatWithAdmin.viewInputSend}>
                {!isKeyboardVisible ? (
                    <>
                        <Animated.View
                            style={{
                                opacity: iconOpacity,
                                transform: [{ translateY: iconTranslateY }],
                            }}
                        >
                            <TouchableOpacity>
                                <Icon.CameraSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity: iconOpacity,
                                transform: [{ translateY: iconTranslateY }],
                            }}
                        >
                            <TouchableOpacity>
                                <Icon.LibraryImageSVG width={Responsive.wp(7)} height={Responsive.hp(5)} fill={'red'} />
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity: iconOpacity,
                                transform: [{ translateY: iconTranslateY }],
                            }}
                        >
                            <TouchableOpacity>
                                <Icon.MicSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                            </TouchableOpacity>
                        </Animated.View>
                    </>
                ) : (
                    <TouchableOpacity onPress={handleImagePress}>
                        <Image
                            source={Icon.RIGHT}
                            style={{ width: Responsive.wp(6), height: Responsive.hp(5) }}
                        />
                    </TouchableOpacity>
                )}
                <InputCustom
                    placeholder="Nhập tin nhắn..."
                    value={message}
                    onChangeText={setMessage}
                    style={[
                        IndexStyles.StyleChatWithAdmin.input,
                        { width: isKeyboardVisible ? Responsive.wp(75) : Responsive.wp(48) },
                    ]}
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Icon.SendSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatWithAdmin;
