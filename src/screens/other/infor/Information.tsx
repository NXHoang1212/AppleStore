import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import useStatusBarConfig from '../../../utils/UseStatusBarConfig'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from '../../../constant/Icon'

import { renderInformationItem, renderOrderStatus } from '../../../import/IndexComponent'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeTypeParam } from '../../../model/param/IndexStack.Param'

import { useAppSelector } from '../../../features/redux/ReduxHook'
import { IndexStyles } from '../../../import/IndexStyles';

const Information: React.FC = () => {
  useStatusBarConfig('dark-content', 'transparent', true)
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeTypeParam>>()
  const isLoggedIn = useAppSelector(state => state.root.Auth)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={IndexStyles.StyleInformation.container}>
        <LinearGradient colors={['#EB5A65', '#EB5A65', '#EB5A65']} style={IndexStyles.StyleInformation.viewheader}>
          <View style={IndexStyles.StyleInformation.headerTitle}>
            {isLoggedIn.user.photoUrl
              ? <Image source={{ uri: isLoggedIn.user.photoUrl }} style={IndexStyles.StyleInformation.image} />
              : <Icon.AvatarSVG width={50} height={50} fill='#FFFFFF' />
            }
            <View style={{ flexDirection: 'column', gap: 2 }}>
              <Text style={IndexStyles.StyleInformation.textheader1}>Nguyễn Xuân Hoàng</Text>
              <Text style={IndexStyles.StyleInformation.textheader2}>Thành viên bạc</Text>
              <Text style={IndexStyles.StyleInformation.textheader2}>Bạn có 3 đơn hàng</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={IndexStyles.StyleInformation.containerbody}>
          <View style={IndexStyles.StyleInformation.containerorder}>
            <View style={IndexStyles.StyleInformation.vieworder1}>
              <Icon.MenuOrderSVG width={27} height={27} fill='blue' />
              <Text style={IndexStyles.StyleInformation.textOrder1}>Đơn mua</Text>
            </View>
            <TouchableOpacity style={IndexStyles.StyleInformation.vieworder2} onPress={() => navigation.navigate(isLoggedIn ? 'TabStatusOrder' : 'AuthUser', { screen: 'StatusDelivered' } as any)}>
              <Text style={IndexStyles.StyleInformation.textOrder2}>Lịch sử mua hàng</Text>
              <Image source={Icon.RIGHT} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
          </View>
          <View style={IndexStyles.StyleInformation.containerConfirm}>
            {renderOrderStatus({ icon: <Icon.WaitOrderSVG width={27} height={27} fill='#5e5e5e' />, text: 'Chờ xác nhận', navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'TabStatusOrder' : 'AuthUser', { screen: 'Xác nhận' } as any) })}
            {renderOrderStatus({ icon: <Icon.WaitPickupSVG width={27} height={27} fill='#5e5e5e' />, text: 'Chờ giao hàng', navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'TabStatusOrder' : 'AuthUser', { screen: 'Giao hàng' } as any) })}
            {renderOrderStatus({ icon: <Icon.WaitShipperSVG width={27} height={27} fill='#5e5e5e' />, text: 'Đã giao hàng', navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'TabStatusOrder' : 'AuthUser', { screen: 'Đã giao' } as any) })}
            {renderOrderStatus({ icon: <Icon.OrderCancelledSVG width={27} height={27} fill='#5e5e5e' />, text: 'Đã hủy đơn', navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'TabStatusOrder' : 'AuthUser', { screen: 'Đã hủy' } as any) })}
          </View>
          <View style={IndexStyles.StyleInformation.decor}></View>
          <View>
            {renderInformationItem({ text: 'Khách hàng thân thiết', image: Icon.LOYALCUSTOMER })}
            {renderInformationItem({ text: 'Thông tin cá nhân', image: Icon.INFOR, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'EditProfile' } as any) })}
            {renderInformationItem({ text: 'Địa chỉ', image: Icon.ADDRESS, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'ViewAddRess' } as any) })}
            {renderInformationItem({ text: 'Yêu thích', image: Icon.FAVOURITE, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'Favorites' } as any) })}
            {renderInformationItem({ text: 'Đổi mật khẩu', image: Icon.CHANGEPASSWORD, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'ChangePassword' } as any) })}
            {renderInformationItem({ text: 'Đánh giá của tôi', image: Icon.FEEDBACK, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'ReviewInfor' } as any) })}
            {renderInformationItem({ text: 'Trò chuyện với shop', image: Icon.CHATWITHSHOP, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'ChatWithAdmin' } as any) })}
            {renderInformationItem({ text: 'Xóa tài khoản', image: Icon.DELETEUSER, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'DeleteAccount' } as any) })}
            {renderInformationItem({ text: 'Liên hệ và góp ý', image: Icon.CONTACT, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'ContactFeedback' } as any) })}
            {renderInformationItem({ text: 'Giới thiệu', image: Icon.INTRODUCE, navigate: () => navigation.navigate(isLoggedIn.isLogged ? 'StackIndividual' : 'AuthUser', { screen: 'Introduction' } as any) })}
            {renderInformationItem({ text: 'Đăng xuất', image: Icon.LOGOUT })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Information;