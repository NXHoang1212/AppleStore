import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleAll from './StyleAll'
import { CustomHeader } from '../../../../import/IndexComponent'
import { Icon } from '../../../../constant/Icon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const AllProducts: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <View style={StyleAll.container}>
            <View style={StyleAll.viewheader}>
                <View style={StyleAll.headerTitle}>
                    <CustomHeader title='Quản lý sản phẩm' color='red' />
                </View>
            </View>
            <View style={StyleAll.containerBody}>
                <TouchableOpacity style={StyleAll.viewTab}
                    onPress={() => navigation.navigate('StackAdminManagerProduct', { screen: 'ListProducts' })}>
                    <Icon.AllSVG width={35} height={35} fill={'red'} />
                    <Text style={StyleAll.textTitle}>Tất cả sản phẩm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleAll.viewTab}
                    onPress={() => navigation.navigate('StackAdminManagerProduct', { screen: 'AddProducts' })}>
                    <Icon.CreateSVG width={35} height={35} fill={'red'} />
                    <Text style={StyleAll.textTitle}>Thêm sản phẩm mới</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleAll.viewTab}
                    onPress={() => navigation.navigate('StackAdminManagerProduct', { screen: 'EditProducts' })}>
                    <Icon.EditSVG width={35} height={35} fill={'red'} />
                    <Text style={StyleAll.textTitle}>Cập nhật sản phẩm mới</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleAll.viewTab}
                    onPress={() => navigation.navigate('StackAdminManagerProduct', { screen: 'DeleteProducts' })}>
                    <Icon.DeleteSVG width={35} height={35} fill={'red'} />
                    <Text style={StyleAll.textTitle}>Xóa sản phẩm mới</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AllProducts