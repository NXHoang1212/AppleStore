import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon } from '../../../constant/Icon'

import { CustomCheckBox } from '../../../import/IndexComponent'
import { IndexStyles } from '../../../import/IndexStyles';

const DeleteAccount: React.FC = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <View style={IndexStyles.StyleDeleteAccount.container}>
            <View style={IndexStyles.StyleDeleteAccount.viewheader}>
                <View style={IndexStyles.StyleDeleteAccount.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleDeleteAccount.textHeader}>Xóa tài khoản</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleDeleteAccount.containerBody}>
                <View style={IndexStyles.StyleDeleteAccount.viewdeleteAccount}>
                    <Image source={Icon.DELETEACCOUNT} style={IndexStyles.StyleDeleteAccount.image} />
                    <View style={{ paddingHorizontal: 5 }}>
                        <Text style={IndexStyles.StyleDeleteAccount.textdelete}>
                            Thật buồn khi biết bạn sắp rời khỏi đây.
                            Tất cả thông tin và đặt hàng hay đơn hàng của bản kể cả
                            thông tin liên lạc số điện thoại, tài khoản đăng nhập đều sẽ bị xóa.
                        </Text>
                        <Text style={IndexStyles.StyleDeleteAccount.textdelete}>
                            Tôi mong bạn đã có những trải nghiệm tuyệt vời tại đây sau khi sử dụng dịch vụ của chúng tôi.
                            Và hãy chắc chắn rằng bạn thật sự muốn xóa tài khoản của mình.
                        </Text>
                    </View>
                </View>
                <View style={IndexStyles.StyleDeleteAccount.viewcheckbox}>
                    <CustomCheckBox
                        title='Xác nhận xóa tài khoản'
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                    />
                </View>
                <TouchableOpacity
                    style={[IndexStyles.StyleDeleteAccount.buttonConfirm, { opacity: checked ? 1 : 0.5 }]}
                    disabled={!checked}>
                    <Text style={IndexStyles.StyleDeleteAccount.textbutton}>Xóa tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default DeleteAccount  