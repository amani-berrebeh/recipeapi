import axios from "axios"
import { GETRECIPEFAILED, GETRECIPELOADING, GETRECIPESUCCESS } from "./actionTypes"

export const getrecipe =()=> async (dispatch)=>{
    try { dispatch ({type:GETRECIPELOADING})
     const resp = await
    axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=01dd33e2&app_key=64ccda011be1b3a5552df0c364eedc95&ingr=5&diet=high-protein&cuisineType=Asian&mealType=Lunch")
  console.log(resp)
  dispatch({type:GETRECIPESUCCESS,payload:resp.data.hits})
  } catch (error) { console.log(error)
      dispatch({type:GETRECIPEFAILED,payload:error})
  }
  }
  //redux thunk i dispatch