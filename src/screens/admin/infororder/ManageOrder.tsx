import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../utils/UseStatusBarConfig'
import { useGetAllOrderForAdminQuery } from '../../../service/Api/Index.Order'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from '../../../constant/Icon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../../import/IndexFeatures'
import StyleMangerOrder from './StyleMangerOrder'
import { IndexStyles } from '../../../import/IndexStyles'
import { UseActiveTab } from '../../../utils/ActiveTab'
import { FlashList } from '@shopify/flash-list'

const ManageOrder = () => {
  useStatusBarConfig('dark-content', 'transparent', true)

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const { activeTab, handleActiveTab } = UseActiveTab('Chờ xác nhận')

  const user = useAppSelector(state => state.root.Auth)

  const { data, isLoading } = useGetAllOrderForAdminQuery()

  return (
    <View style={StyleMangerOrder.container}>
      <LinearGradient
        colors={['#FFA07A', '#FF6347']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleMangerOrder.header}>
        <View style={StyleMangerOrder.headerTitle}>
          <Icon.LogoAppleSVG width={70} height={130} fill='red' />
          <Text style={StyleMangerOrder.headerText}>Quản lý đơn hàng</Text>
          <TouchableOpacity>
            <Icon.BellSVG width={28} height={25} fill='#fff' />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={StyleMangerOrder.containerBody}>
        <View style={IndexStyles.StyleReviewInfor.viewTab}>
          <TouchableOpacity onPress={() => { handleActiveTab('Chờ xác nhận') }}>
            <Text style={activeTab === 'Chờ xác nhận' ? StyleMangerOrder.textActive : StyleMangerOrder.textTab}>Chưa xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { handleActiveTab('Đã xác nhận') }}>
            <Text style={activeTab === 'Đã xác nhận' ? StyleMangerOrder.textActive : StyleMangerOrder.textTab}>Đã xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { handleActiveTab('Đã hủy') }}>
            <Text style={activeTab === 'Đã hủy' ? StyleMangerOrder.textActiveCancel : StyleMangerOrder.textTab}>Đã hủy đơn</Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeTab === 'Chờ xác nhận' ? (
        <FlashList
          data={data?.data.filter(item => item.status === 'Chờ xác nhận')}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('StackAdmin', { screen: 'DetailOrder', params: { item } })}>
              <View style={StyleMangerOrder.viewOrder}>
                <View style={StyleMangerOrder.viewOrderLeft}>
                  <View style={StyleMangerOrder.viewOrderText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.name}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.phone}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.address}</Text>
                  </View>
                </View>
                <View style={StyleMangerOrder.viewOrderRight}>
                  <Text style={StyleMangerOrder.textOrder}>{item.totalPrice}đ</Text>
                  <Text style={StyleMangerOrder.textOrder}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : activeTab === 'Đã xác nhận' ? (
        <FlashList
          data={data?.data.filter(item => item.status === 'Đã xác nhận')}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('StackAdmin', { screen: 'DetailOrder', params: { item } })}>
              <View style={StyleMangerOrder.viewOrder}>
                <View style={StyleMangerOrder.viewOrderLeft}>
                  <View style={StyleMangerOrder.viewOrderText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.orderCode}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.phone}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.address}</Text>
                  </View>
                </View>
                <View style={StyleMangerOrder.viewOrderRight}>
                  <Text style={StyleMangerOrder.textOrder}>{item.totalPrice}đ</Text>
                  <Text style={StyleMangerOrder.textOrder}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlashList
          data={data?.data.filter(item => item.status === 'Đã hủy')}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('StackAdmin', { screen: 'DetailOrder', params: { item } })}>
              <View style={StyleMangerOrder.viewOrder}>
                <View style={StyleMangerOrder.viewOrderLeft}>
                  <View style={StyleMangerOrder.viewOrderText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.orderCode}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.phone}</Text>
                    <Text style={StyleMangerOrder.textOrder}>{item.address}</Text>
                  </View>
                </View>
                <View style={StyleMangerOrder.viewOrderRight}>
                  <Text style={StyleMangerOrder.textOrder}>{item.totalPrice}đ</Text>
                  <Text style={StyleMangerOrder.textOrder}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )

      }
    </View>
  )
}

export default ManageOrder