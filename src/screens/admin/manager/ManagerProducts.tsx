import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useStatusBarConfig from '../../../utils/UseStatusBarConfig'
import { CustomHeader } from '../../../import/IndexComponent'
import StyleMangerProducts from './StyleManagerProducts'
import { Icon } from '../../../constant/Icon'

const ManagerProducts = () => {
  useStatusBarConfig('dark-content', 'transparent', true)

  return (
    <View style={StyleMangerProducts.container}>
      <View style={StyleMangerProducts.viewheader}>
        <View style={StyleMangerProducts.headerTitle}>
          <CustomHeader title='Quản lý sản phẩm' color='red' />
        </View>
      </View>
      <View style={StyleMangerProducts.containerBody}>
        <View style={StyleMangerProducts.viewTab}>
          <Image source={Icon.PRODUCTADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textHeader}>Quản lý sản phẩm</Text>
        </View>
        <View style={StyleMangerProducts.viewTab}>
          <Image source={Icon.CATEGORYADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textHeader}>Quản lý danh mục</Text>
        </View>
        <View style={StyleMangerProducts.viewTab}>
          <Image source={Icon.BANNERADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textHeader}>Quản lý quảng cáo</Text>
        </View>
        <View style={StyleMangerProducts.viewTab}>
          <Image source={Icon.CUSTOMERADMIN} style={StyleMangerProducts.image} />
          <Text style={StyleMangerProducts.textHeader}>Quản lý Khách hàng</Text>
        </View>
      </View>
    </View>
  )
}

export default ManagerProducts