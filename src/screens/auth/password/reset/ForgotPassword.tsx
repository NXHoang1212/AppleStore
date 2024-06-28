import { View, Text, Image, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import React, { useState } from 'react'
import { IndexStyles } from '../../../../import/IndexStyles'
import { Icon } from '../../../../constant/Icon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InputCustom } from '../../../../import/IndexComponent'
import { Responsive } from '../../../../constant/Responsive'

const ForgotPassword: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [email, setEmail] = useState<string>('')

    return (
        <Pressable onPress={Keyboard.dismiss} style={IndexStyles.StyleForgotPassword.container}>
            <View style={IndexStyles.StyleForgotPassword.containerHeader}>
                <View style={IndexStyles.StyleForgotPassword.viewHeader}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleForgotPassword.textHeader}>Đặt lại mật khẩu</Text>
                    <Icon.QuestionSVG width={23} height={25} fill='red' style={{ 'top': Responsive.hp(0.2) }} />
                </View>
            </View>
            <View style={IndexStyles.StyleForgotPassword.containerBody}>
                <InputCustom
                    placeholder='Vui lòng nhập email của bạn'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    icon={<Icon.AccountSVG width={20} height={20} fill='red' />}
                    style={IndexStyles.StyleForgotPassword.input}
                />
                <TouchableOpacity style={[IndexStyles.StyleForgotPassword.button, { backgroundColor: email.length === 0 ? 'grey' : 'red' }]}
                    // disabled={email.length === 0}
                    onPress={() => navigation.navigate('OtpPassword', { name: 'xuanhoanggn@gmail.com' })}
                >
                    <Text style={IndexStyles.StyleForgotPassword.text}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default ForgotPassword