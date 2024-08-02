import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react'
import { IndexStyles } from '../../../../import/IndexStyles'
import { CustomCheckBox, CustomHeader } from '../../../../import/IndexComponent';
import { useGetAddressIdUserQuery } from '../../../../service/Api/IndexAddress';
import { useAppSelector, useAppDispatch } from '../../../../import/IndexFeatures';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '../../../../constant/Icon';
import { fetchAddressById } from '../../../../redux/slices/Address.Slice';

const SelectedAddress: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const dispatch = useAppDispatch()

  const route = useRoute()

  const { id, shipper, address, selectedPayment } = route.params as { id: string, shipper: string, address: any, selectedPayment: any }

  const { data } = useGetAddressIdUserQuery(useAppSelector(state => state.root.Auth.user._id))

  const [selected, setSelected] = useState<string>(address?._id)

  const handlePress = (item: any) => {
    setSelected(item._id)
    navigation.navigate('StackMisc', { screen: 'PaymentOrders', params: { address: item, id: id, shipper: shipper, selectedPayment: selectedPayment } })
  };


  return (
    <View style={IndexStyles.StyleSelectedAddress.container}>
      <View style={IndexStyles.StyleSelectedAddress.viewheader}>
        <View style={IndexStyles.StyleSelectedAddress.headerTitle}>
          <CustomHeader title='Chọn địa chỉ nhận hàng' color='black' />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={IndexStyles.StyleSelectedAddress.containerBody}>
          {data?.data.map((item: any, index: number) => (
            <TouchableOpacity key={index} style={IndexStyles.StyleSelectedAddress.viewItem} onPress={() => handlePress(item)}>
              <CustomCheckBox
                checked={selected === item._id}
                onPress={() => handlePress(item)}
                style={IndexStyles.StyleSelectedAddress.checkbox}
              />
              <View style={IndexStyles.StyleSelectedAddress.containerItem}>
                <View style={IndexStyles.StyleSelectedAddress.viewUser}>
                  <Text style={IndexStyles.StyleSelectedAddress.textName}>{item.name}  |</Text>
                  <Text style={IndexStyles.StyleSelectedAddress.textPhone}>{item.phone}</Text>
                  <TouchableOpacity style={IndexStyles.StyleSelectedAddress.viewEdit}
                    onPress={() => {
                      dispatch(fetchAddressById(item._id));
                      navigation.navigate('StackIndividual', { screen: 'EditAddress', params: { _id: item._id } })
                    }} >
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
                <View style={IndexStyles.StyleSelectedAddress.line} />
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={IndexStyles.StyleSelectedAddress.viewButton}
            onPress={() => navigation.navigate('StackIndividual', { screen: 'MoreAddress' })}>
            <Icon.AddSVG width={30} height={30} fill='red' />
            <Text style={IndexStyles.StyleSelectedAddress.textButton}>Thêm địa chỉ mới</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SelectedAddress