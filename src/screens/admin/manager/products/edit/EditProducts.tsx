import { View, Text } from 'react-native'
import React from 'react'
import StyleEditProducts from './StyleEditProducts'
import { CustomHeader } from '../../../../../import/IndexComponent'

const EditProducts: React.FC = () => {
    return (
        <View style={StyleEditProducts.viewheader}>
            <View style={StyleEditProducts.headerTitle}>
                <CustomHeader title='Cập nhật sản phẩm' color='red' />
            </View>
        </View>
    )
}

export default EditProducts