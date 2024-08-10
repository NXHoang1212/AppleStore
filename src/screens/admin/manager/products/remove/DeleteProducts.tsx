import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../../../../import/IndexComponent'
import StyleDeleteProducts from './StyleRemoveProducts'

const DeleteProducts: React.FC = () => {
    return (
        <View style={StyleDeleteProducts.viewheader}>
            <View style={StyleDeleteProducts.headerTitle}>
                <CustomHeader title='Xóa sản phẩm' color='red' />
            </View>
        </View>
    )
}

export default DeleteProducts