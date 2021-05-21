import {GET_RECIPIES, ACTIVE_RECIPE,REMOVE_ACTIVE_RECIPE} from "../ActionTypes";


const initialState={
    recipes:[],
        activerecipe:null
}

const RecipeReducer=(state=initialState,action)=>{
        switch (action.type) {
            case GET_RECIPIES:
                const apiRecipe = action.payload.map(r=>{
                    return{
                        ...r,
                        id:r._id,
                        date:String(r.createdAt)
                    }
                })
                return{
                    ...state,
                    recipes : apiRecipe,
                }
            case ACTIVE_RECIPE:
                return{
                    ...state,
                    activerecipe : state.recipes.find(r => r.id === action.payload),
                }
            case REMOVE_ACTIVE_RECIPE:
                return{
                    ...state,
                    activerecipe : null                        
                    }  
            // case REMOVE_RECIPE:
            //     const RRD = [...state.recipes]
            //     const FRD =RRD.filter(r=>r.id !== action.payload)
            //     return{
            //         ...state,
            //         recipes : FRD                        
            //         }  

            // case CREATE_RECIPE:
            //     const CNR = [...state.recipes]
            //     CNR.push(action.payload)
            //     return{
            //         ...state,
            //         recipes : CNR                        
            //         }   

            // case MODIFY_RECIPE:
            //     const MNR = [...state.recipes]
            //     const MRIndex = MNR.findIndex(r=>r.id===action.payload.id)
            //     MNR[MRIndex] = action.payload
            //     console.log(MRIndex)
            //     return{
            //         ...state,
            //         recipes : MNR                   
            //         }            
            default:
                return state
        }
}

export default RecipeReducer