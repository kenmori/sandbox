import { createSlice } from "@reduxjs/toolkit"

const innitalState = {
  name: ""
}

const slice = createSlice({
  name: "",
  innitalState,
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload })
    },
    clearName: state => {
      return Object.assign({}, state, { name: "" })
    }
  }
})

export function someAsyncTask(){
  return async function(dispatch){
    try {
      const response = await api()
       dispatch(setName())
      } catch (err){
        console.log(err);
    }
  }
}

export default slice.reducer

export const { setName, clearName } = slice.actions



