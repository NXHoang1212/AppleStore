import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomHeader, CustomModalConfirm, InputCustom } from '../../../../../import/IndexComponent';

import StyleEditVouchers from './StyleEditVoucher';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ToastMessage from '../../../../../utils/ToastMessage';
import { useGetDetailAdminVoucherQuery } from '../../../../../service/Api/Index.Voucher';


const EditVouchers: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const route = useRoute<RouteProp<{ route: any }, 'route'>>();

    const id = route.params?.id;

    const { data, isLoading } = useGetDetailAdminVoucherQuery(id);


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


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='red' />
            </View>
        )
    }

    return (
        <View style={StyleEditVouchers.container}>
            <View style={StyleEditVouchers.viewheader}>
                <View style={StyleEditVouchers.headerTitle}>
                    <CustomHeader title='Cập nhật mã giảm giá' color='red' />
                </View>
            </View>
            <View style={StyleEditVouchers.containerBody}>
                <View >
                    <View style={StyleEditVouchers.viewImage}>
                        {/* {images ?
                            <Image source={{ uri: images }} style={StyleEditVouchers.image} />
                            :
                            <Image source={{ uri: data?.data.images as string }}
                                style={StyleEditVouchers.image} />
                        } */}
                        <TouchableOpacity style={StyleEditVouchers.buttonImage} onPress={handleSelectPhoto}>
                            <Text style={StyleEditVouchers.textButtonImage}>Chọn ảnh</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleEditVouchers.viewInput}>
                        <Text style={StyleEditVouchers.text}>Tên danh mục</Text>

                    </View>
                </View>
            </View>
            <TouchableOpacity style={StyleEditVouchers.button} >
                <Text style={StyleEditVouchers.textButton}>Cập nhật</Text>
            </TouchableOpacity>
        </View >
    );
};

export default EditVouchers;
