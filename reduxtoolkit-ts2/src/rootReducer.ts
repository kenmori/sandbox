import { combineReducers } from "@reduxjs/toolkit"
import  counterReducers  from "./features/counterSlice"
import { useSelector as rawUseSelector, TypedUseSelectorHook, useDispatch } from "react-redux"
import * as Store from "./store"

type A = ReturnType<typeof counterReducers>

const rootReducer = combineReducers<{ counter: ReturnType<typeof counterReducers>}>({
  counter: counterReducers
})

export const useSelector: TypedUseSelectorHook<Store.RootState> = rawUseSelector



export default rootReducer
