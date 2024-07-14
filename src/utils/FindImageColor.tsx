import { DetailProductParams } from "../model/entity/IndexProduct.entity";

export const colorMapping: { [key: string]: string[] } = {
    "Đen": ["Black"],
    "Trắng": ["white"],
    "Hồng": ["pinky", "purple"],
    "Xanh dương": ["blue"],
    "Xanh lá cây": ["green", "ProGreen"],
    "Đỏ": ["red"],
    "Vàng": ["gold", "Yellow", "ProGold"],
    "Xám": ["progrey"],
    "Bạc": ["prosilver"],
};


export const findImageByColor = (item: DetailProductParams, color: string) => {
    const normalizedColor = colorMapping[color];
    const matchedImage = item.images.find(image => {
        const imageName = image.toString().split('/').pop()?.split('.')[0];
        return normalizedColor?.some(color => imageName?.toLowerCase().includes(color.toLowerCase()));
    });
    return matchedImage ? matchedImage : item.images[0];
};
