import {REQUEST,SUCCESS,FAILURE} from './Action'
import { ApiData } from './state'

const reducer = (state = ApiData ,action) => {
    switch (action.type) {
        case REQUEST: return {
            ...state,
            loading:true
        }

        case SUCCESS: return {
            ...state,
            loading:false,
            user:action.payload
        }

        case FAILURE: return {
            ...state,
            loading:false,
            user:[],
            error :action.payload
        }
    
        default:
            return state;
    }
}
export default reducer