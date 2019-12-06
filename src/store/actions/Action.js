const jewelryLoaded = (newJewelry) => {
    return {
        type: 'JEWELRY-LOADED',
        payload: newJewelry
    }
}

export {
    jewelryLoaded
} 

export const jewelryAddedToCart = (jwelryId) => {
    return {
        type: 'JEWELRY_ADDED_TO_CART',
        payload: jwelryId
    }
}