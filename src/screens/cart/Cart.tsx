import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { Icon } from '../../constant/Icon'
import { IndexStyles } from '../../import/IndexStyles';

import useStatusBarConfig from '../../utils/UseStatusBarConfig'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useGetCartByUserQuery } from '../../service/Api/IndexCart';
import { useAppSelector } from '../../import/IndexFeatures';
import { ItemListCart } from '../../import/IndexComponent';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Cart: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const user = useAppSelector(state => state.root.Auth.user._id)

  const { data, isLoading } = useGetCartByUserQuery(user)

  const currentlyOpenSwipeable = useRef<Swipeable | null>(null);

  if (isLoading) {
    return (
      <View style={IndexStyles.StyleCart.containerLoading}>
        <ActivityIndicator size='large' color='red' />
      </View>
    )
  }

  return (
    <View style={IndexStyles.StyleCart.container}>
      <View style={IndexStyles.StyleCart.viewheader}>
        <View style={IndexStyles.StyleCart.headerSmall}>
          <TouchableOpacity style={IndexStyles.StyleCart.iconback} onPress={() => navigation.goBack()}>
            <Icon.BackSVG width={25} height={25} fill='#fff' />
          </TouchableOpacity>
          <Text style={IndexStyles.StyleCart.textheader}>Giỏ hàng của bạn</Text>
        </View>
      </View>
      <View style={IndexStyles.StyleCart.containerBody}>
        {data?.data.map((item) => (
          <ScrollView key={item._id} showsVerticalScrollIndicator={false}>
            <ItemListCart
              item={item}
              navigation={navigation}
              currentlyOpenSwipeable={currentlyOpenSwipeable}
            />
          </ScrollView>
        ))
        }
      </View>
    </View>
  )
}

export default Cart