import { View, Text, TouchableOpacity, ActivityIndicator, RefreshControl, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Icon } from '../../constant/Icon'
import { IndexStyles } from '../../import/IndexStyles';

import useStatusBarConfig from '../../utils/UseStatusBarConfig'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useGetCartByUserQuery } from '../../service/Api/IndexCart';
import { useAppSelector, useAppDispatch } from '../../import/IndexFeatures';
import { decrementItemCount } from '../../redux/slices/CountCartSlice';
import { ItemListCart, CustomCheckBox } from '../../import/IndexComponent';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FormatPrice } from '../../utils/FormatPrice';
import LinearGradient from 'react-native-linear-gradient';

const Cart: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.root.Auth.user._id)

  const { data, isLoading } = useGetCartByUserQuery(user)

  const currentlyOpenSwipeable = useRef<Swipeable | null>(null);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [selectAll, setSelectAll] = useState<boolean>(false);

  const shipper = '22.500đ'

  const handleItemSelect = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(prev => prev.filter(id => id !== itemId));
    } else {
      setSelectedItems(prev => [...prev, itemId]);
    }
  };

  if (isLoading) {
    return (
      <View style={IndexStyles.StyleCart.containerLoading}>
        <ActivityIndicator size='large' color='red' />
      </View>
    )
  }

  let total = 0

  data?.data.forEach((item) => {
    if (selectedItems.includes(item._id)) {
      total += item.products.priceColor.price * item.quantity;
    }
  });

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
          <ScrollView key={item._id} showsVerticalScrollIndicator={false} refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => { }}
            />
          }>
            <ItemListCart
              item={item}
              navigation={navigation}
              currentlyOpenSwipeable={currentlyOpenSwipeable}
              decrementItemCount={decrementItemCount}
              dispatch={dispatch}
              isSelected={selectedItems.includes(item._id)}
              onItemSelect={handleItemSelect}
            />
          </ScrollView>
        ))
        }
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={IndexStyles.StyleCart.viewButton} >
          <CustomCheckBox
            checked={selectAll}
            onPress={() => {
              setSelectAll(!selectAll);
              if (!selectAll) {
                setSelectedItems(data?.data.map(item => item._id) || []);
              } else {
                setSelectedItems([]);
              }
            }}
            title='Tất cả'
          />
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={IndexStyles.StyleCart.textPayment}>Tổng cộng</Text>
              <Text style={IndexStyles.StyleCart.textTotal}>{FormatPrice(total)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={IndexStyles.StyleCart.textShipper}>Phí vận chuyển</Text>
              <Text style={IndexStyles.StyleCart.textTotalShipper}>{shipper}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient colors={['#ff5d00', '#ff00a5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              style={IndexStyles.StyleCart.viewPayment}>
              <Text style={IndexStyles.StyleCart.textButton}>Thanh toán({selectedItems.length})</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cart