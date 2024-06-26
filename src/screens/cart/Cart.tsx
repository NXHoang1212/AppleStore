import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '../../constant/Icon'
import useStatusBarConfig from '../../utils/UseStatusBarConfig'
import { IndexStyles } from '../../import/IndexStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Cart: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
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
    </View>
  )
}

export default Cart