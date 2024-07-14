import { DetailProductParams } from "../model/entity/IndexProduct.entity";

export const colorMapping: { [key: string]: string } = {
    "Đen": "Black",
    "Trắng": "white",
    "Hồng": "pinky",
    "Xanh dương": "blue",
    "Xanh lá cây": "green",
    "Đỏ": "red"
};

export const findImageByColor = (item: DetailProductParams, color: string) => {
    const normalizedColor = colorMapping[color];
    const matchedImage = item.images.find(image => {
        const imageName = image.toString().split('/').pop()?.split('.')[0]; // Get the image name without extension
        const colorInImageName = imageName?.replace('Iphone13', '').toLowerCase();
        return colorInImageName === normalizedColor;
    });
    return matchedImage ? matchedImage : item.images[0];
};
