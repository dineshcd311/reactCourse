//import { Reducer, initialState } from './reducer';
import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

// it's for single reducer
// export const ConfigureStore = ()=>{
//     const store = createStore(
//       Reducer,
//       initialState  
//     );
//     return store;
// }

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}