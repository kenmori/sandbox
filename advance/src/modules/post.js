import{createAction, handleActions} from 'redux-actions'

const POST = "post/POST";
const SELECT = "post/SELECT";
export const REQUEST = "post/REQUEST";
export const SUCCESS_POST = "post/SUCCESS_POST";
export const SUCCESS_GET = "post/SUCCESS_GET";
export const FAILUER = "post/FAILUER";

export const post = createAction(POST);
export const successGet = createAction(SUCCESS_GET);
export const successPost = createAction(SUCCESS_POST);
export const failuer= createAction(FAILUER)
export const get = createAction(REQUEST)
export const select = createAction(SELECT)

const initialState = {
  entities: [],
  selectedFiles: [],
  error: {},
  status: ""
};

export default handleActions({
  [SELECT]: (state, action)=>({
    ...state,
    selectedFiles: [...state.selectedFiles, action.payload]
  }),
  [SUCCESS_POST]: (state,action) => ({
    ...state,
    status: action.payload
  }),
  [SUCCESS_GET]:(state, action) =>({
    ...state,
    entities: action.payload
  }),
  [FAILUER] : (state, action)=>({
    ...state,
    error: action.payload
  })
},initialState)
