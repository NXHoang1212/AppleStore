import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Icon } from '../../../../constant/Icon'
import { InputCustom, CustomSwtich } from '../../../../import/IndexComponent'

import { UseFocus } from '../../../../utils/ActiveTab'
import { StackIndividualParams } from '../../../../model/param/IndexStack.Param'
import { SubdivisionsParams } from '../../../../model/entity/IndexMap.entity';
import { IndexStyles } from '../../../../import/IndexStyles';

const MoreAddress: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackIndividualParams, 'ViewAddRess'>>();
    const route = useRoute<SubdivisionsParams['route']>()
    const { province, district, ward } = route.params ? route.params : { province: null, district: null, ward: null }
    const { focus, handleFocus } = UseFocus(false)
    const [name, setName] = useState<string>('')


    return (
        <View style={IndexStyles.StyleMoreAddress.container}>
            <View style={IndexStyles.StyleMoreAddress.viewheader}>
                <View style={IndexStyles.StyleMoreAddress.headerTitle}>
                    <Icon.BackSVG width={25} height={25} fill='red' onPress={() => navigation.goBack()} />
                    <Text style={IndexStyles.StyleMoreAddress.textHeader}>Địa chỉ mới</Text>
                </View>
            </View>
            <View style={IndexStyles.StyleMoreAddress.containerBody}>
                <View style={IndexStyles.StyleMoreAddress.viewinput}>
                    <Text style={IndexStyles.StyleMoreAddress.textinput}>Liên hệ</Text>
                    <InputCustom
                        placeholder='Họ và tên'
                        placeholderTextColor='gray'
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={IndexStyles.StyleMoreAddress.input1}
                        keyboardType='default'
                    />
                    <InputCustom
                        placeholder='Số điện thoại'
                        placeholderTextColor='gray'
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={IndexStyles.StyleMoreAddress.input2}
                        keyboardType='default'
                    />
                </View>
                <View style={IndexStyles.StyleMoreAddress.viewinput}>
                    <Text style={IndexStyles.StyleMoreAddress.textinput}>Địa chỉ</Text>
                    {province && district && ward ?
                        <TouchableOpacity style={IndexStyles.StyleMoreAddress.viewchooseAddress} onPress={() => navigation.navigate('ChooseAddress')} >
                            <View>
                                <Text style={IndexStyles.StyleMoreAddress.textchooseAddress}>{province}</Text>
                                <Text style={IndexStyles.StyleMoreAddress.textchooseAddress}>{district}</Text>
                                <Text style={IndexStyles.StyleMoreAddress.textchooseAddress}>{ward}</Text>
                            </View>
                            <Image source={Icon.RIGHT} style={IndexStyles.StyleMoreAddress.iconright} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={IndexStyles.StyleMoreAddress.viewaddress} onPress={() => navigation.navigate('ChooseAddress')}>
                            <Text style={IndexStyles.StyleMoreAddress.textaddress}>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</Text>
                            <Image source={Icon.RIGHT} style={IndexStyles.StyleMoreAddress.iconright} />
                        </TouchableOpacity>
                    }
                    <InputCustom
                        placeholder='Tên đường, số nhà'
                        placeholderTextColor='gray'
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={IndexStyles.StyleMoreAddress.input2}
                        keyboardType='default'
                    />
                </View>
                <View style={IndexStyles.StyleMoreAddress.containerSetting}>
                    <Text style={IndexStyles.StyleMoreAddress.textinput}>Cài đặt</Text>
                    <View style={IndexStyles.StyleMoreAddress.containerViewtext}>
                        <Text style={IndexStyles.StyleMoreAddress.textsetting}>Loại địa chỉ:</Text>
                        <TouchableOpacity style={[IndexStyles.StyleMoreAddress.viewhome, focus ? IndexStyles.StyleMoreAddress.selected : null]}
                            onPress={() => handleFocus(true)}>
                            <Text style={[IndexStyles.StyleMoreAddress.textoptions, focus ? IndexStyles.StyleMoreAddress.selectedText : null]}>Nhà Riêng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[IndexStyles.StyleMoreAddress.viewoffice, focus ? null : IndexStyles.StyleMoreAddress.selected]}
                            onPress={() => handleFocus(false)}>
                            <Text style={[IndexStyles.StyleMoreAddress.textoptions, focus ? null : IndexStyles.StyleMoreAddress.selectedText]}>Văn Phòng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={IndexStyles.StyleMoreAddress.containerViewdefault}>
                        <Text style={IndexStyles.StyleMoreAddress.textsetting}>Đặt làm địa chỉ mặc định</Text>
                        <CustomSwtich value={false} onChange={(value) => console.log(value)} />
                    </View>
                </View>
                <TouchableOpacity style={IndexStyles.StyleMoreAddress.viewbutton}>
                    <Text style={IndexStyles.StyleMoreAddress.textbutton}>Hoàn thành</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MoreAddress