import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react'
import { CustomHeader } from '../../../../../import/IndexComponent';

import StyleListCustomerChat from './StyleListCustomerChat';
import { Responsive } from '../../../../../constant/Responsive';
import { useAppSelector } from '../../../../../import/IndexFeatures';

import { ScrollView } from 'react-native-gesture-handler';
import { socket } from '../../../../../utils/Socket.io-client';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '../../../../../constant/Icon';

const ListCustomerChat: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const users = useAppSelector(state => state.root.Auth.user);

    const [waitingUsers, setWaitingUsers] = useState<any[]>([]);

    useFocusEffect(
        useCallback(() => {
            socket.emit('getWaitingMessages');

            socket.on('newMessageFromUser', (data) => {
                const newMessage = {
                    ...data,
                    isRead: data.isRead,
                    username: data.username,
                };

                setWaitingUsers((prevMessages) => {
                    const existingMessageIndex = prevMessages.findIndex(
                        (message) => message.message === newMessage.message && message.time === newMessage.time
                    );

                    // Chỉ thêm tin nhắn nếu chưa tồn tại trong danh sách
                    if (existingMessageIndex === -1) {
                        return [...prevMessages, newMessage];
                    }

                    return prevMessages;
                });
            });

            return () => {
                socket.off('newMessageFromUser');

                socket.off('getWaitingMessages');
            };
        }, [])
    );

    const groupMessagesByUser = (messages: any) => {
        const userMessagesMap = new Map();

        messages.forEach((message: { username: string; room?: string; isRead: boolean; time: string, role: string }) => {
            const { username, room, isRead, time, role } = message;
            // Nhóm tin nhắn theo room, bao gồm cả tin nhắn từ admin và user
            if (!userMessagesMap.has(room)) {
                userMessagesMap.set(room, {
                    room: room,
                    messages: [],
                    unreadCount: 0,
                    username,
                    time,
                });
            }
            const roomInfo = userMessagesMap.get(room);
            roomInfo.messages.push(message);
            // Tăng số lượng tin nhắn chưa đọc 
            if (!isRead && role === 'user') {
                roomInfo.unreadCount += 1;
            }
        });

        return Array.from(userMessagesMap.values());
    };

    const filteredUsers = groupMessagesByUser(waitingUsers);

    const handleSelectUser = (room: string, user: string) => {
        navigation.navigate('StackAdminManagerOther', {
            screen: 'ChatAdmin',
            params: {
                room: room, admin: users.fullname, role: users.role, user: user
            }
        });
    };

    return (
        <View style={StyleListCustomerChat.container}>
            <View style={StyleListCustomerChat.viewheader}>
                <View style={StyleListCustomerChat.headerTitle}>
                    <CustomHeader title='Tin nhắn khách hàng' color='red' fontSize={Responsive.RFPercentage(2.4)} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={StyleListCustomerChat.containerBody}>
                    <FlatList
                        data={filteredUsers}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            const lastMessage = item.messages[item.messages.length - 1]?.message || '';
                            return (
                                <TouchableOpacity
                                    style={StyleListCustomerChat.viewItem}
                                    onPress={() => handleSelectUser(item.room, item.username)}
                                >
                                    <Icon.AvatarSVG width={Responsive.wp(10)} height={Responsive.hp(5)} fill='red' />
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Responsive.wp(80) }}>
                                            <Text style={StyleListCustomerChat.textName}>{item.username}</Text>
                                            <Text style={StyleListCustomerChat.textTime}>{item.time}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={StyleListCustomerChat.textMessage}>
                                                {lastMessage.length > 38 ? `${lastMessage.slice(0, 38)}...` : lastMessage}
                                            </Text>
                                            {item.unreadCount > 0 && (
                                                <Text style={StyleListCustomerChat.textUnreadBadge}>
                                                    {item.unreadCount}
                                                </Text>
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ListCustomerChat

