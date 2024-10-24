import { View, Text, Animated, TouchableOpacity, Image, Keyboard, FlatList, TextInputBase, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react'
import { CustomHeader, InputCustom } from '../../../../../import/IndexComponent';

import StyleChatAdmin from './StyleChatAdmin';
import { Responsive } from '../../../../../constant/Responsive';
import { Icon } from '../../../../../constant/Icon';

import { useAppSelector } from '../../../../../import/IndexFeatures';
import { ScrollView } from 'react-native-gesture-handler';

import { socket } from '../../../../../utils/Socket.io-client';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MessageEntity } from '../../../../../model/entity/Index.Message.entity';

type Props = {
    admin: string;
    room: string;
    role: string;
    user: string;
}

const ChatAdmin: React.FC = () => {

    const route = useRoute<RouteProp<Record<string, Props>, 'params'>>();

    const { room, role, admin, user } = route.params;

    const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

    const iconOpacity = useRef(new Animated.Value(1)).current;

    const iconTranslateY = useRef(new Animated.Value(0)).current;

    const [messages, setMessages] = useState<MessageEntity[]>([]);

    const [message, setMessage] = useState<string>('');

    const scrollRef = useRef<ScrollView>(null);

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
            socket.emit('adminMessage', { room, message, role });
            setMessage('');
        }
    };


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {

        socket.emit('joinRoom', { admin, room, role });

        socket.emit('joinUserRoom', { user: user, admin: admin });

        socket.on('userMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        socket.on('userImage', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('userAudio', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('userVideo', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('loadMessages', (loadedMessages) => {
            loadedMessages.sort((a: { time: string | number | Date; }, b: { time: string | number | Date; }) => new Date(a.time).getTime() - new Date(b.time).getTime());
            setMessages(loadedMessages);
        });

        socket.emit('getWaitingMessages');


        return () => {

            socket.off('userMessage');

            socket.off('loadMessages');
        };

    }, []);

    useEffect(() => {
        scrollRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <View style={StyleChatAdmin.container}>
            <View style={StyleChatAdmin.viewheader}>
                <View style={StyleChatAdmin.headerTitle}>
                    <CustomHeader title='Trò chuyện khách hàng' color='red' fontSize={Responsive.RFPercentage(2.4)} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                ref={scrollRef}
            >
                <View style={StyleChatAdmin.containerBody}>
                    <View style={StyleChatAdmin.viewBody}>
                        <FlatList
                            data={messages}
                            renderItem={({ item }) => (
                                <View style={[StyleChatAdmin.viewItem, {
                                    alignSelf: item.username === 'Admin' ? 'flex-end' : 'flex-start',
                                    backgroundColor: item.username === 'Admin' ? '#DCF8C6' : '#FFF',
                                    justifyContent: item.username === 'Admin' ? 'flex-end' : 'flex-start',
                                    alignItems: item.username === 'Admin' ? 'flex-end' : 'flex-start',

                                },]}>
                                    <Text style={StyleChatAdmin.textMessage}>{item.message}</Text>
                                    <Text style={StyleChatAdmin.textName}>{item.username}</Text>
                                    <Text style={StyleChatAdmin.textTime}>{item.time}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={StyleChatAdmin.viewInputSend}>
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
                <TextInput
                    placeholder="Nhập tin nhắn..."
                    value={message}
                    onChangeText={setMessage}
                    style={[
                        StyleChatAdmin.input,
                        { width: isKeyboardVisible ? Responsive.wp(75) : Responsive.wp(48) },
                    ]}
                    onFocus={() => {
                        setTimeout(() => {
                            scrollRef.current?.scrollToEnd({ animated: true });
                        }, 100);
                    }}
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Icon.SendSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatAdmin