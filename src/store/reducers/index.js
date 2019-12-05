import products from '../../productMaker'

const initialState = {
    jewelry: [],
    products,
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case 'JEWELRY-LOADED' :
            return {
                jewelry: action.payload
            };
            default:
                return state
    }
}

export default reducer