import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../../utils/UseStatusBarConfig'
import { useGetAllOrderForAdminQuery } from '../../../../service/Api/Index.Order'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from '../../../../constant/Icon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../../../import/IndexFeatures'
import StyleMangerOrder from './StyleMangerOrder'
import { UseActiveTab } from '../../../../utils/ActiveTab'
import { FlashList } from '@shopify/flash-list'
import { FormatPriceVND2 } from '../../../../utils/FormatPrice'

const ManageOrder: React.FC = () => {
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
          <Text style={StyleMangerOrder.headerText}>Quản lý đơn hàng admin</Text>
          <TouchableOpacity>
            <Icon.BellSVG width={28} height={25} fill='#fff' />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={StyleMangerOrder.containerBody}>
        <View style={StyleMangerOrder.viewTab}>
          <TouchableOpacity
            style={activeTab === 'Chờ xác nhận' ? StyleMangerOrder.viewTabButton : {}}
            onPress={() => { handleActiveTab('Chờ xác nhận') }}>
            <Text style={activeTab === 'Chờ xác nhận' ? StyleMangerOrder.textActive : StyleMangerOrder.textTab}>Chưa xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 'Đã xác nhận' ? StyleMangerOrder.viewTabButton : {}}
            onPress={() => { handleActiveTab('Đã xác nhận') }}>
            <Text style={activeTab === 'Đã xác nhận' ? StyleMangerOrder.textActive : StyleMangerOrder.textTab}>Đã xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 'Đã hủy' ? StyleMangerOrder.viewTabButton : {}}
            onPress={() => { handleActiveTab('Đã hủy') }}>
            <Text style={activeTab === 'Đã hủy' ? StyleMangerOrder.textActiveCancel : StyleMangerOrder.textTab}>Đơn đã hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeTab === 'Chờ xác nhận' ? (
        <FlashList
          data={data?.data.filter(item => item.status === 'Chờ xác nhận')}
          renderItem={({ item }) => (
            <View style={StyleMangerOrder.viewOrder}>
              <TouchableOpacity style={StyleMangerOrder.viewOrderText}
                onPress={() => navigation.navigate('StackAdminManagerOrder', { screen: 'DetailManagerOrder', params: { id: item._id } })}>
                <View style={StyleMangerOrder.viewOrderProduct}>
                  <View>
                    <Image source={{ uri: item.products[0].priceColor.image }} style={StyleMangerOrder.imageOrder} />
                  </View>
                  <View style={StyleMangerOrder.viewOrderProductText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.products[0].name} {item.products[0].model} {item.products[0].storage}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Số lượng:</Text>
                      <Text style={StyleMangerOrder.textProduct}>x{item.products[0].quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Màu sắc</Text>
                      <Text style={StyleMangerOrder.textProduct}>{item.products[0].priceColor.color}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Tổng tiền:</Text>
                      <Text style={StyleMangerOrder.textProduct}>{FormatPriceVND2(item.totalAmount)}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={StyleMangerOrder.viewOrderButton}>
                  <Text style={StyleMangerOrder.textActive}>Xác nhận đơn hàng</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      ) : activeTab === 'Đã xác nhận' ? (
        <FlashList
          data={data?.data.filter(item => item.status === 'Đã xác nhận')}
          renderItem={({ item }) => (
            <View style={StyleMangerOrder.viewOrder}>
              <TouchableOpacity style={StyleMangerOrder.viewOrderText}
                onPress={() => navigation.navigate('StackAdminManagerOrder', { screen: 'DetailManagerOrder', params: { id: item._id } })}>
                <View style={StyleMangerOrder.viewOrderProduct}>
                  <View>
                    <Image source={{ uri: item.products[0].priceColor.image }} style={StyleMangerOrder.imageOrder} />
                  </View>
                  <View style={StyleMangerOrder.viewOrderProductText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.products[0].name} {item.products[0].model} {item.products[0].storage}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Số lượng:</Text>
                      <Text style={StyleMangerOrder.textProduct}>x{item.products[0].quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Màu sắc</Text>
                      <Text style={StyleMangerOrder.textProduct}>{item.products[0].priceColor.color}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Tổng tiền:</Text>
                      <Text style={StyleMangerOrder.textProduct}>{FormatPriceVND2(item.totalAmount)}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      ) : (
        <FlashList
          data={data?.data.filter(item => item.status === 'Đã hủy')}
          renderItem={({ item }) => (
            <View style={StyleMangerOrder.viewOrderCancel}>
              <TouchableOpacity style={StyleMangerOrder.viewOrderText}
                onPress={() => navigation.navigate('StackAdminManagerOrder', { screen: 'DetailOrderCancel', params: { id: item._id } })}>
                <View style={StyleMangerOrder.viewOrderProduct}>
                  <View>
                    <Image source={{ uri: item.products[0].priceColor.image }} style={StyleMangerOrder.imageOrder} />
                  </View>
                  <View style={StyleMangerOrder.viewOrderProductText}>
                    <Text style={StyleMangerOrder.textOrder}>{item.products[0].name} {item.products[0].model} {item.products[0].storage}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Số lượng:</Text>
                      <Text style={StyleMangerOrder.textProduct}>x{item.products[0].quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Màu sắc</Text>
                      <Text style={StyleMangerOrder.textProduct}>{item.products[0].priceColor.color}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={StyleMangerOrder.textOrder}>Tổng tiền:</Text>
                      <Text style={StyleMangerOrder.textProduct}>{FormatPriceVND2(item.totalAmount)}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                  <Text style={StyleMangerOrder.textOrder}>Tình trạng</Text>
                  <Text style={StyleMangerOrder.textProduct}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      )}
    </View>
  )
}

export default ManageOrder