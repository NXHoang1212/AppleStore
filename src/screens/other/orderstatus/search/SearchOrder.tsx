import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'

import { InputCustom } from '../../../../import/IndexComponent';
import { Icon } from '../../../../constant/Icon';

import { StackHomeTypeParam } from '../../../../model/param/IndexStack.Param';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { IndexStyles } from '../../../../import/IndexStyles';

const SearchOrder: React.FC = () => {
    useStatusBarConfig('dark-content', 'transparent', true)
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeTypeParam>>();
    const [search, setSearch] = useState<string>('')
    return (
        <View style={IndexStyles.StyleSearchOrder.container}>
            <View style={IndexStyles.StyleSearchOrder.viewheader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon.BackSVG width={25} height={28} fill='red' />
                </TouchableOpacity>
                <Text style={IndexStyles.StyleSearchOrder.textheader}>Tìm kiếm đơn hàng</Text>
                <TouchableOpacity onPress={() => navigation.navigate('StackIndividual' as any, { screen: 'ChatWithAdmin' })}>
                    <Icon.ChatSVG width={28} height={28} fill='red' />
                </TouchableOpacity>
            </View>
            <View style={IndexStyles.StyleSearchOrder.viewinput}>
                <InputCustom
                    placeholder='Tìm kiếm theo tên đơn, mã, id đơn...'
                    placeholderTextColor='#000000'
                    keyboardType='default'
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={IndexStyles.StyleSearchOrder.input}
                    icon={<Icon.SearchSVG width={20} height={20} fill='red' />}
                />
            </View>
            <View style={IndexStyles.StyleSearchOrder.containerBody}>

            </View>
        </View>

    )
}

export default SearchOrder