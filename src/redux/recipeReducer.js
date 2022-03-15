import { GETRECIPEFAILED, GETRECIPELOADING, GETRECIPESUCCESS } from './actionTypes';
const initialState = {

    recipes:[],loading:false,error:null
}

const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETRECIPELOADING:
    return { ...state,loading:true}

 case GETRECIPESUCCESS:
    return { ...state,recipes:payload, loading:false}

   case GETRECIPEFAILED:
    return { ...state,error:payload, loading:false} 
  default:
    return state
  }
}
export default recipeReducer