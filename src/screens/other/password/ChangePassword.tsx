import { View, Text, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Icon } from '../../../constant/Icon'
import { InputCustom } from '../../../import/IndexComponent'
import { IndexStyles } from '../../../import/IndexStyles';

const ChangePassword: React.FC = () => {
    const navigation = useNavigation()
    return (
        <Pressable style={IndexStyles.StyleChangePassword.container} onPress={Keyboard.dismiss} >
            <View style={IndexStyles.StyleChangePassword.container}>
                <View style={IndexStyles.StyleChangePassword.viewheader}>
                    <View style={IndexStyles.StyleChangePassword.headerTitle}>
                        <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                        <Text style={IndexStyles.StyleChangePassword.textHeader}>Thay đổi mật khẩu</Text>
                    </View>
                </View>
                <View style={IndexStyles.StyleChangePassword.containerBody}>
                    <View style={IndexStyles.StyleChangePassword.viewInput}>
                        <InputCustom
                            placeholder='Nhập lại mật khẩu cũ'
                            value=''
                            onChangeText={() => { }}
                            keyboardType='default'
                            style={IndexStyles.StyleChangePassword.textinput}
                            placeholderTextColor='gray'
                        />
                        <TouchableOpacity>
                            <Text style={IndexStyles.StyleChangePassword.textVerification}>Xác minh?</Text>
                        </TouchableOpacity>
                    </View>
                    <InputCustom
                        placeholder='Mật khẩu mới'
                        value=''
                        onChangeText={() => { }}
                        keyboardType='default'
                        style={IndexStyles.StyleChangePassword.textinput}
                        placeholderTextColor='gray'
                    />
                    <InputCustom
                        placeholder='Xác nhận mật khẩu mới'
                        value=''
                        onChangeText={() => { }}
                        keyboardType='default'
                        style={IndexStyles.StyleChangePassword.textinput}
                        placeholderTextColor='gray'
                    />
                    <TouchableOpacity style={IndexStyles.StyleChangePassword.viewConfirm}>
                        <Text style={IndexStyles.StyleChangePassword.textConfirm}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </Pressable>
    )
}

export default ChangePassword 