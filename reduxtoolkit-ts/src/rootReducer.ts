import { combineReducers } from "@reduxjs/toolkit"
import * as Counter from "./features/counterSlice"

type counterStore = ReturnType<Counter.reducers>
const rootReducer = combineReducers<counterStore>({
  counter: Counter.reducers
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
