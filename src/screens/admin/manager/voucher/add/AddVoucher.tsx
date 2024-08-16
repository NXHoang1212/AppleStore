import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomHeader, InputCustom } from '../../../../../import/IndexComponent';

import StyleAddVouchers from './StyleAddVoucher';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '../../../../../constant/Icon';
import ToastMessage from '../../../../../utils/ToastMessage';

import { useAppDispatch } from '../../../../../import/IndexFeatures';

const AddVouchers: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const dispatch = useAppDispatch();


  const [images, setImages] = useState<string>('');


  const handleSelectPhoto = async () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.7,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      includeBase64: true,
    }).then((images: any) => {
      setImages(images.path);
    }).catch(error => {
      console.log('Error selecting images: ', error);
    });
  };


  return (
    <View style={StyleAddVouchers.container}>
      <View style={StyleAddVouchers.viewheader}>
        <View style={StyleAddVouchers.headerTitle}>
          <CustomHeader title='Thêm mã giảm giá' color='red' />
        </View>
      </View>
      <View style={StyleAddVouchers.containerBody}>
        <View >
          <View style={StyleAddVouchers.viewImage}>
            {images ?
              <Image source={{ uri: images }} style={StyleAddVouchers.image} />
              :
              <Icon.AvatarSVG width={100} height={100} fill='black' />
            }
            <TouchableOpacity style={StyleAddVouchers.buttonImage} onPress={handleSelectPhoto}>
              <Text style={StyleAddVouchers.textButtonImage}>Chọn ảnh</Text>
            </TouchableOpacity>
          </View>
          <View style={StyleAddVouchers.viewInput}>

          </View>
        </View>
      </View>
      <TouchableOpacity style={StyleAddVouchers.button} >
        <Text style={StyleAddVouchers.textButton}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddVouchers;
