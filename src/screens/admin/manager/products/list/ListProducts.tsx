import { View, Text } from 'react-native'
import React from 'react'
import StyleListProducts from '../StyleAll'
import { CustomHeader } from '../../../../../import/IndexComponent'

const ListProducts: React.FC = () => {
    return (
        <View style={StyleListProducts.viewheader}>
            <View style={StyleListProducts.headerTitle}>
                <CustomHeader title='Danh sách sản phẩm' color='red' />
            </View>
        </View>
    )
}

export default ListProducts