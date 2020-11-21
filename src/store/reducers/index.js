import products from '../../productMaker'

const initialState = {
    jewelry: [],
    products,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'JEWELRY-LOADED':
            return {
                jewelry: action.payload
            };
        case 'JEWELRY_ADDED_TO_CART':
            // const jewelryId = action.payload;
            // const jewelry = state.jewelry.find((jewelry) => jewelry.id === jewelryId)
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer