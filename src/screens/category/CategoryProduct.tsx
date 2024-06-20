import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import useStatusBarConfig from '../../utils/UseStatusBarConfig'
import { Icon } from '../../constant/Icon'
import { FlashList } from '@shopify/flash-list'
import { ItemCategoryProduct } from '../../import/IndexComponent'
import { IndexStyles } from '../../import/IndexStyles';
import { useAppSelector } from '../../import/IndexFeatures'
import { Loading } from '../../import/IndexComponent'
import { useNavigation } from '@react-navigation/native'

const CategoryProduct: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)
  const DataCategory = useAppSelector((state) => state.Category.data)
  const isLoading = useAppSelector((state) => state.Category.loading)
  const navigation = useNavigation()

  return (
    <View style={IndexStyles.StyleCategoryProduct.container}>
      <View style={IndexStyles.StyleCategoryProduct.viewheader}>
        <View style={IndexStyles.StyleCategoryProduct.headerSmall}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.BackSVG width={25} height={25} fill='#fff' />
          </TouchableOpacity>
          <Text style={IndexStyles.StyleCategoryProduct.textheader}>Danh mục điện thoại</Text>
          <TouchableOpacity>
            <Icon.MenuSVG width={25} height={25} fill='#FFFFFF' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={IndexStyles.StyleCategoryProduct.containerProduct}>
          {isLoading && <Loading loading={isLoading} />}
          <FlashList
            data={DataCategory}
            renderItem={({ item }) => <ItemCategoryProduct item={item} />}
            keyExtractor={(item) => item._id}
            horizontal={false}
            numColumns={2}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
          />
      </View>
    </View>
  )
}

export default CategoryProduct