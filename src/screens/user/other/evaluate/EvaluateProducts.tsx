import { View, Text, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { UseActiveTab } from '../../../../utils/ActiveTab'
import { IndexStyles } from '../../../../import/IndexStyles'
import { CustomHeader } from '../../../../import/IndexComponent'


const EvaluateProducts: React.FC = () => {

    const navigation = useNavigation()


    return (
        <View style={IndexStyles.StyleEvaluateProducts.container} >
            <View style={IndexStyles.StyleEvaluateProducts.viewheader}>
                <View style={IndexStyles.StyleEvaluateProducts.headerTitle}>
                    <CustomHeader title='Đánh giá sản phẩm  ' color='red'/>
                </View>
            </View>
            <View style={IndexStyles.StyleEvaluateProducts.containerBody}>
             
            </View>
            
        </View>
    )
}

export default EvaluateProducts 