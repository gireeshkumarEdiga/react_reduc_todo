import { ADD_TODO } from "./action";

const initstate = {
    todo:[],
}

export const reducer = (store=initstate,{type,payload}) => {
    switch(type) {
        case ADD_TODO : 
            return {
                ...store, 
                todo:[...payload]
            }

        default :
             return store    
    }
}