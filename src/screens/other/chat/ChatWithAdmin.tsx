import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../../../constant/Icon'
import { IndexStyles } from '../../../import/IndexStyles'



const ChatWithAdmin: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={IndexStyles.StyleChatWithAdmin.container}>
            <View style={IndexStyles.StyleChatWithAdmin.viewheader}>
                <View style={IndexStyles.StyleChatWithAdmin.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleChatWithAdmin.textHeader}>Trò chuyện với tôi</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleChatWithAdmin.containerBody}>
            </View>
        </View>
        
    )
}

export default ChatWithAdmin  