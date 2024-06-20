import { View, Text, Animated, Share, Dimensions } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DetailProductParams } from '../../model/entity/IndexProduct.entity';


type Props = {
    item?: any;
}

const UseBottomSheetModel = ({ item }: Props) => {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['50%', '50%'], []);

    const [selectedItem, setSelectedItem] = useState<DetailProductParams | null>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
        setSelectedItem(item);
    }, []);

    const handleDismissModal = useCallback(() => {
        bottomSheetModalRef.current?.close();
        setSelectedItem(null);
    }, []);

    return { bottomSheetModalRef, snapPoints, selectedItem, setSelectedItem, handlePresentModalPress, handleDismissModal }
}

export default UseBottomSheetModel