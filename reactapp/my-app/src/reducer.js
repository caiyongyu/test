import { combineReducers } from "redux";

const count = (state=0,action)=>{
    console.log(state,action)
    switch(action.type){
        case "ADD":
            return state+action.step;
            break;
        default:
        return state
    }
    
}

//将reduce放入combineReduces中使其工作
const reduce = combineReducers({
    count
})

export default reduce;