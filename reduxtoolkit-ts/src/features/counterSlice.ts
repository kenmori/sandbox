import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"

import * as Store from "../store"

type State = {
  count: number,
  loading: boolean,
  error: boolean,
  errorMessage: string
}

const initialState: State = {
  count: 1,
  loading: false,
  error: false,
  errorMessage: ""
}

type Responce = {
  value: number
}

type GetDataArgument = {
  value: number
}

type ActionDispatch = {
    dispatch: AppDispatch;
    state: Store.RootState;
}

const sleep = (second: number) => {
  new Promise((resolve) => {
    setTimeout(() => resolve(), second)
  })
}
export const getData = createAsyncThunk<Responce, GetDataArgument, ActionDispatch>(
  "counter/getData",
  async ({value}, thunkApi) => {
    await sleep(1000)
    const result = await fetch("https://jsondata.okiba.me/v1/json/6qk09201017012231")
    console.log(result.json());
    return result.json()
  }
)

const counter = createSlice({
  name: "counter",

  initialState,
  reducers: {
    countUp: (state: State, action: PayloadAction<number>) => {
      // disabled eslint next-line
      return { ...state, count: state.count + action.payload}
    },
    countDown: (state: State, action: PayloadAction<number>) => {
      return { ...state, count: state.count + action.payload}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ""
      }
    }).addCase(getData.fulfilled, (state, action: PayloadAction<{value: number}>) => {
      return {
        ...state,
        count: state.count + action.payload.value,
        loading: false,
        error: false,
        errorMessage: ""
      }
    }).addCase(getData.rejected, (state) => {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "error"
      }
    })
  }
})

export const { countUp, countDown } =  counter.actions



export default counter.reducer

