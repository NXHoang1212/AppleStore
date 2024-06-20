import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';

import { COLOR } from '../../../../constant/Colors';
import { Icon } from '../../../../constant/Icon';
import { Responsive } from '../../../../constant/Responsive';
import { IndexStyles } from '../../../../import/IndexStyles';

import { DetailProductParams } from '../../../../model/entity/IndexProduct.entity';
import { FormatPrice, calculateDiscountedPrice } from '../../../../utils/FormatPrice';
import { CustomBackdrop, ItemListDetailArticle, ItemModelInfor } from '../../../../import/IndexComponent';

import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { ShareItemDetail, UseBottomSheetModel } from '../../../../import/IndexFeatures';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../../../import/IndexFeatures';

import { FlashList } from '@shopify/flash-list';
import Shuffle from '../../../../utils/Shuffle';

type PropsProduct = {
    item: DetailProductParams,
    navigation?: any
}

const ItemDetailArticle: React.FC<PropsProduct> = ({ item, navigation }) => {
    const { onImageLoad, shareProduct, showDescription, ToggleDescription } = ShareItemDetail();
    const { selectedItem, bottomSheetModalRef, snapPoints, handlePresentModalPress, handleDismissModal } = UseBottomSheetModel({ item });

    const [selectedPrice, setSelectedPrice] = useState<{ price: number, color: string }>({
        price: item.priceColor[0].price,
        color: item.priceColor[0].color,
    });

    const product = useAppSelector(state => state.Product.data).slice(0, 20);

    return (
        <BottomSheetModalProvider>
            <View style={IndexStyles.StyleItemDetailArticle.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
                    <View style={IndexStyles.StyleItemDetailArticle.containerHeader}>
                        <LinearGradient colors={['#ffffff', '#e8e8e8']} style={IndexStyles.StyleItemDetailArticle.viewimage}>
                            <View style={IndexStyles.StyleItemDetailArticle.viewIcon}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Icon.BackSVG
                                        width={Responsive.wp(8)}
                                        height={Responsive.hp(8)}
                                        fill={COLOR.REDONE}
                                        style={IndexStyles.StyleItemDetailArticle.iconBack}
                                    />
                                </TouchableOpacity>
                                <View style={IndexStyles.StyleItemDetailArticle.viewIconHeader}>
                                    <TouchableOpacity onPress={() => shareProduct(item)}>
                                        <Icon.ShareSVG
                                            width={Responsive.wp(7)}
                                            height={Responsive.hp(7)}
                                            fill={COLOR.REDONE}
                                            style={IndexStyles.StyleItemDetailArticle.iconShare}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon.ShoppingCartSVG
                                            width={Responsive.wp(7)}
                                            height={Responsive.hp(7)}
                                            fill={COLOR.REDONE}
                                            style={IndexStyles.StyleItemDetailArticle.iconCart}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Carousel
                                data={item.images}
                                renderItem={({ item }) => (
                                    <Animated.Image
                                        source={{ uri: item as string }}
                                        style={IndexStyles.StyleItemDetailArticle.image}
                                        onLoad={onImageLoad}
                                    />
                                )}
                                width={Responsive.wp(100)}
                                height={Responsive.hp(48)}
                                scrollAnimationDuration={1000}
                                windowSize={10}
                                panGestureHandlerProps={{
                                    activeOffsetX: [-10, 10],
                                }}
                            />
                        </LinearGradient>
                    </View>
                    <View style={IndexStyles.StyleItemDetailArticle.containerBody}>
                        <View style={IndexStyles.StyleItemDetailArticle.containerText}>
                            <Text style={IndexStyles.StyleItemDetailArticle.textname}>{item.name} {item.storage} {item.model}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Responsive.wp(2), paddingBottom: Responsive.hp(2) }}>
                                <Text style={IndexStyles.StyleItemDetailArticle.textPriceDiscount}>{FormatPrice(calculateDiscountedPrice(item.priceColor[0].price, item.discount.percentage))}</Text>
                                <Text style={IndexStyles.StyleItemDetailArticle.textPrice}>{FormatPrice(item.priceColor[0].price)}</Text>
                                <Text style={IndexStyles.StyleItemDetailArticle.textDiscount}>Giảm {item.discount.percentage}%</Text>
                            </View>
                            <Text style={IndexStyles.StyleItemDetailArticle.textTilte}>Sản phẩm</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: Responsive.wp(1), paddingBottom: Responsive.hp(1) }}>
                                {item.priceColor.map((product, index) => (
                                    <TouchableOpacity key={index}
                                        style={[IndexStyles.StyleItemDetailArticle.viewPriceColor,
                                        selectedPrice.color === product.color ? { backgroundColor: COLOR.REDONE } : { backgroundColor: COLOR.ORANGE }]}
                                        onPress={() => { setSelectedPrice({ price: product.price, color: product.color }) }} >
                                        <Text style={IndexStyles.StyleItemDetailArticle.textPirceColor}>{product.color}</Text>
                                        <Text style={IndexStyles.StyleItemDetailArticle.textPirceColor}>{FormatPrice(calculateDiscountedPrice(product.price, item.discount.percentage))}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={IndexStyles.StyleItemDetailArticle.containerShipper}>
                                <View style={IndexStyles.StyleItemDetailArticle.viewShipper}>
                                    <Icon.WaitShipperSVG width={Responsive.wp(7)} height={Responsive.hp(5)} fill={COLOR.REDONE} />
                                    <Text style={IndexStyles.StyleItemDetailArticle.textShipper}>Đảm báo nhận hàng trong vòng 2 - 3 ngày ở trong nội thành</Text>
                                </View>
                                <View style={IndexStyles.StyleItemDetailArticle.viewShipper}>
                                    <Icon.ProtectSVG width={Responsive.wp(7)} height={Responsive.hp(5)} fill={COLOR.REDONE} />
                                    <Text style={IndexStyles.StyleItemDetailArticle.textShipper}>Được đổi sản phẩm trong 7 ngày đầu (sản phẩm còn nguyên vẹn, seal, team, hộp sản phẩm, không trày)</Text>
                                </View>
                            </View>
                            <View style={IndexStyles.StyleItemDetailArticle.viewDetail}>
                                <Text style={IndexStyles.StyleItemDetailArticle.textTilte}>Chi tiết sản phẩm</Text>
                                <TouchableOpacity style={IndexStyles.StyleItemDetailArticle.viewModel} onPress={handlePresentModalPress}>
                                    <Text style={IndexStyles.StyleItemDetailArticle.textTilte}>Model máy sx</Text>
                                    <Image source={Icon.RIGHT} style={IndexStyles.StyleItemDetailArticle.iconRight} />
                                </TouchableOpacity>
                            </View>
                            <View style={IndexStyles.StyleItemDetailArticle.containerDescribe}>
                                <Text style={IndexStyles.StyleItemDetailArticle.textDescribe}>
                                    {showDescription ? item.description : item.description.slice(0, 500)}...
                                    <Text onPress={ToggleDescription} style={[IndexStyles.StyleItemDetailArticle.textDescribe, { color: COLOR.REDONE }]}>
                                        {showDescription ? 'Rút gọn' : 'Xem thêm'}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={IndexStyles.StyleItemDetailArticle.listProduct}>
                            <Text style={IndexStyles.StyleItemDetailArticle.textProduct}>Sản phẩm liên quan</Text>
                            <FlashList
                                data={product}
                                renderItem={({ item }) => <ItemListDetailArticle item={item} navigation={navigation} />}
                                keyExtractor={(item) => item._id}
                                horizontal={false}
                                numColumns={2}
                                estimatedItemSize={500}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={IndexStyles.StyleItemDetailArticle.containerFooter}>
                    <View style={IndexStyles.StyleItemDetailArticle.viewChatCart}>
                        <TouchableOpacity style={IndexStyles.StyleItemDetailArticle.viewChat}>
                            <Icon.ChatSVG width={Responsive.wp(7)} height={Responsive.hp(4)} fill={COLOR.REDTWO} />
                            <Text style={IndexStyles.StyleItemDetailArticle.textChat}>Chat ngay</Text>
                        </TouchableOpacity>
                        <View style={IndexStyles.StyleItemDetailArticle.lineheight} />
                        <TouchableOpacity style={IndexStyles.StyleItemDetailArticle.viewChat}>
                            <Icon.ShoppingCartSVG width={Responsive.wp(7)} height={Responsive.hp(4)} fill={COLOR.REDTWO} />
                            <Text style={IndexStyles.StyleItemDetailArticle.textCart}>Giỏ hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={IndexStyles.StyleItemDetailArticle.viewTotal}>
                        <Text style={IndexStyles.StyleItemDetailArticle.textTotal}>Mua sản phẩm</Text>
                        <Text style={IndexStyles.StyleItemDetailArticle.textTotalPrice}>{FormatPrice(calculateDiscountedPrice(selectedPrice.price, item.discount.percentage))}</Text>
                    </TouchableOpacity>
                </View>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    backdropComponent={(props) => <CustomBackdrop {...props} onClose={handleDismissModal} />}
                    footerComponent={() => (
                        <TouchableOpacity style={IndexStyles.StyleItemDetailArticle.footerButton} onPress={handleDismissModal}>
                            <Text style={IndexStyles.StyleItemDetailArticle.footerText}>Đồng ý</Text>
                        </TouchableOpacity>
                    )}
                >
                    <BottomSheetScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <BottomSheetView style={IndexStyles.StyleItemDetailArticle.contentContainer}>
                            <ItemModelInfor item={selectedItem as DetailProductParams} />
                        </BottomSheetView>
                    </BottomSheetScrollView>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

export default ItemDetailArticle;
