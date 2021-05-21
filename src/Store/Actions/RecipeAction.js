import { GET_RECIPIES,ACTIVE_RECIPE,REMOVE_ACTIVE_RECIPE } from "../ActionTypes";
import axios from "../../utils/axios";



export const GetRecipe=() => dispatch => {
    axios.post('/recipe/read')
    .then(response=>{
        return dispatch({
            type:GET_RECIPIES,
            payload:response.data.recipe

        })
    })
    .catch(err=>console.log(err.response))
}

export const CreateRecipe = (recipe) => dispatch => {
    axios.post('/recipe/create', {...recipe})
        .then(response => {
          return dispatch(GetRecipe())
        })
        .catch(err => console.log(err.response));
};

export const ModifyRecipe = (id, recipe) => dispatch => {
    axios.patch(`/recipe/update/${id}`, {...recipe})
        .then(response => {
          console.log(response);
          return dispatch(GetRecipe())
        })
        .catch(err => console.log(err));
    
  };

export const RemoveRecipe=(id)=>dispatch=>{
    axios.delete(`/recipe/delete/${id}`)
    .then(response => {
    return dispatch(GetRecipe())
  })
  .catch(err => console.log(err));
}
  

export const GetActiveRecipe=(id)=>{
    return{
        type:ACTIVE_RECIPE,
        payload:id
    }
}

export const RemoveActiveRecipe=()=>{
    return{
        type:REMOVE_ACTIVE_RECIPE,
    }
}



  