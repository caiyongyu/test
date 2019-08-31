import {createStore} from 'redux'
import reducer from "./reducer"

const initialState ={
  count:111
}

const store = createStore(reducer,initialState)

export default store;