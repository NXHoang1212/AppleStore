import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../utils/UseStatusBarConfig'
import { CustomHeader } from '../../../import/IndexComponent'
import StyleMangerProducts from './StyleManagerProducts'
import { Icon } from '../../../constant/Icon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const ManagerAll: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <View style={StyleMangerProducts.container}>
      <View style={StyleMangerProducts.viewheader}>
        <View style={StyleMangerProducts.headerTitle}>
          <CustomHeader title='Quản lý danh mục' color='red' />
        </View>
      </View>
      <View style={StyleMangerProducts.containerBody}>
        <TouchableOpacity style={StyleMangerProducts.viewTab}
          onPress={() => navigation.navigate('StackAdminManagerOrder', { screen: 'AllProducts' })}>
          <Image source={Icon.PRODUCTADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textTitle}>Quản lý sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleMangerProducts.viewTab}>
          <Image source={Icon.CATEGORYADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textTitle}>Quản lý danh mục sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleMangerProducts.viewTab}>
          <Image source={Icon.BANNERADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textTitle}>Quản lý quảng cáo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleMangerProducts.viewTab}>
          <Image source={Icon.CUSTOMERADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textTitle}>Quản lý Khách hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ManagerAll