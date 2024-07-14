import { useState } from 'react';
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { HandleUploadAvatar } from '../../service/Api/IndexUser';

const useImagePicker = () => {
    const [photoUrl, setPhotoUrl] = useState<string>('');

    const handleSelectPhoto = async () => {
        try {
           ImageCropPicker.openPicker({
                width: 400,
                height: 400,
                cropping: true,
            }).then((image: any) => {
                setPhotoUrl(image.path);
            }).catch((error: any) => {
                console.log('Error', error);
            });
        } catch (error) {
            console.log('Error', error);
        }
    };

    const handleUploadPhoto = async (id: string, photoUrl: string) => {
        try {
            const response = await HandleUploadAvatar(id, photoUrl);
            return response;
        } catch (error) {
            console.log('Error', error);
        }
    }

    return { photoUrl, handleSelectPhoto, handleUploadPhoto };
};

export default useImagePicker;
