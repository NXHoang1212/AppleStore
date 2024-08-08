import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../../../../constant/Icon'
import { IndexStyles } from '../../../../import/IndexStyles'
import { CustomHeader } from '../../../../import/IndexComponent'
import { Responsive } from '../../../../constant/Responsive'



const ChatWithAdmin: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={IndexStyles.StyleChatWithAdmin.container}>
            <View style={IndexStyles.StyleChatWithAdmin.viewheader}>
                <View style={IndexStyles.StyleChatWithAdmin.headerTitle}>
                    <CustomHeader title='Trò chuyện với tôi' color='red' fontSize={Responsive.RFPercentage(2.6)}/>
                </View>
            </View>
            <View style={IndexStyles.StyleChatWithAdmin.containerBody}>
            </View>
        </View>
        
    )
}

export default ChatWithAdmin  