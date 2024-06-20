import { ProductState } from "../model/entity/IndexProduct.entity";

const FormatPrice = (price: number) => {
    const priceString = (price * 1000).toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice + "đ";
}

const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    return price - (price * discountPercentage / 100);
};


export { FormatPrice, calculateDiscountedPrice }


// const hasDiscount = item.discount && item.discount.percentage > 0;
// const discountedPrice = hasDiscount
//   ? calculateDiscountedPrice(selectedPrice.price, item.discount.percentage)
//   : selectedPrice.price;
