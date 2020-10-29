import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../rootReducer"

type State = {
  count: number
}

const initialState: State = {
  count: 1
}

const counterModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countUp: (state: State, action: PayloadAction<number>) {
      state.count - 1
    },
    countDown: (state: State, action: PayloadAction<number>) {
      state.count + 1
    }
  }
})

export const { countUp, countDown } =  counterModule.actions

export default counterModule.reducer

