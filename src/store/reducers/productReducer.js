import products from '../../productMaker'
import {ADD_TO_FAVORITE} from '../actions/Action';


const initialState = {
    products,
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_FAVORITE:
            return
        default: return state
    }
}

export default reducer
