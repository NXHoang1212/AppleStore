import { View, Text, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import React from 'react'

import { Icon } from '../../../constant/Icon'

import { useNavigation } from '@react-navigation/native'

import { UseActiveTab } from '../../../utils/ActiveTab'
import { IndexStyles } from '../../../import/IndexStyles'
import { CustomHeader } from '../../../import/IndexComponent'
import { Responsive } from '../../../constant/Responsive'


const ReviewInfor: React.FC = () => {
    const navigation = useNavigation()
    const { activeTab, handleActiveTab } = UseActiveTab('review')

    return (
        <View style={IndexStyles.StyleReviewInfor.container} >
            <View style={IndexStyles.StyleReviewInfor.viewheader}>
                <View style={IndexStyles.StyleReviewInfor.headerTitle}>
                    <CustomHeader title='Đánh giá của tôi' color='red' fontSize={Responsive.RFPercentage(2.5)}/>
                </View>
            </View>
            <View style={IndexStyles.StyleReviewInfor.containerBody}>
                <View style={IndexStyles.StyleReviewInfor.viewTab}>
                    <TouchableOpacity onPress={() => { handleActiveTab('review') }}>
                        <Text style={activeTab === 'review' ? IndexStyles.StyleReviewInfor.textActive : IndexStyles.StyleReviewInfor.textTab}>Chưa đánh giá</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleActiveTab('comment') }}>
                        <Text style={activeTab === 'comment' ? IndexStyles.StyleReviewInfor.textActive : IndexStyles.StyleReviewInfor.textTab}>Đã đánh giá</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default ReviewInfor 