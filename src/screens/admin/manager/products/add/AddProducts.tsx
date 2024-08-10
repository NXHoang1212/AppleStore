import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../../../../import/IndexComponent'
import StyleAddProducts from './StyleAddProducts'

const AddProducts: React.FC = () => {
    return (
        <View style={StyleAddProducts.viewheader}>
            <View style={StyleAddProducts.headerTitle}>
                <CustomHeader title='Thêm sản phẩm' color='red' />
            </View>
        </View>
    )
}

export default AddProducts