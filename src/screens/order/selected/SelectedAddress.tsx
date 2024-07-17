import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { IndexStyles } from '../../../import/IndexStyles'
import { CustomCheckBox, CustomHeader } from '../../../import/IndexComponent';
import { useGetAddressIdUserQuery } from '../../../service/Api/IndexAddress';
import { useAppSelector } from '../../../import/IndexFeatures';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SelectedAddress = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  
  const { data } = useGetAddressIdUserQuery(useAppSelector(state => state.root.Auth.user._id))

  const [selected, setSelected] = useState<number>(0)

  return (
    <View style={IndexStyles.StyleSelectedAddress.container}>
      <View style={IndexStyles.StyleSelectedAddress.viewheader}>
        <View style={IndexStyles.StyleSelectedAddress.headerTitle}>
          <CustomHeader title='Chọn địa chỉ nhận hàng' color='black' />
        </View>
      </View>
      <View style={IndexStyles.StyleSelectedAddress.containerBody}>
        {data?.data.map((item: any, index: number) => (
          <View key={index} style={IndexStyles.StyleSelectedAddress.viewItem}>
            <CustomCheckBox checked={selected === index} onPress={() => setSelected(index)} style={IndexStyles.StyleSelectedAddress.checkbox} />
            <TouchableOpacity style={IndexStyles.StyleSelectedAddress.containerItem} onPress={() => setSelected(index)}>
              <View style={IndexStyles.StyleSelectedAddress.viewUser}>
                <Text style={IndexStyles.StyleSelectedAddress.textName}>{item.name}  |</Text>
                <Text style={IndexStyles.StyleSelectedAddress.textPhone}>{item.phone}</Text>
                <TouchableOpacity style={IndexStyles.StyleSelectedAddress.viewEdit} >
                  <Text style={IndexStyles.StyleSelectedAddress.textEdit}>Sửa</Text>  
                </TouchableOpacity>
              </View>
              <View style={IndexStyles.StyleSelectedAddress.viewAddress}>
                <Text style={IndexStyles.StyleSelectedAddress.textAddress}>{item.houseNumber}</Text>
                <Text style={IndexStyles.StyleSelectedAddress.textAddress}>Phường {item.ward}, {item.district}, {item.province}</Text>
              </View>
              <View style={IndexStyles.StyleSelectedAddress.viewShipper}>
                {item.isDefault ? <Text style={IndexStyles.StyleSelectedAddress.textLocation}>Mặc định</Text> : null}
                <Text style={IndexStyles.StyleSelectedAddress.textLocation}>{item.addressType}</Text>
                <Text style={IndexStyles.StyleSelectedAddress.textShipper}>Địa chỉ giao hàng</Text>
              </View>
              {index !== data?.data.length - 1 && <View style={IndexStyles.StyleSelectedAddress.line} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

export default SelectedAddress