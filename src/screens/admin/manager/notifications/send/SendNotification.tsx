import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomHeader, InputCustom } from '../../../../../import/IndexComponent';

import StyleSendNotifications from './StyleSendNotification';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SendNotifications: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();


  return (
    <View style={StyleSendNotifications.container}>
      <View style={StyleSendNotifications.viewheader}>
        <View style={StyleSendNotifications.headerTitle}>
          <CustomHeader title='Gửi thông báo' color='red' />
        </View>
      </View>
      <View style={StyleSendNotifications.containerBody}>

      </View>
    </View>
  );
};

export default SendNotifications;
