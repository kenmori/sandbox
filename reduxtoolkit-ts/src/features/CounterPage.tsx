import * as React from "react"
import * as ReactRedux from "react-redux"
import * as CounterModule from "./counterSlice"
import * as Store from "../store"
import Button from "../components/Button"


export function Component(){
  const dispatch = ReactRedux.useDispatch()
  const count = ReactRedux.useSelector<Store.RootState, number>((state) => state.counter.count)

  const onClickDown = () => {
    dispatch(CounterModule.countDown(-1))
  }

  const onClickUp = () => {
    dispatch(CounterModule.countUp(1))
  }

  return (
    <React.Fragment>
      <div>{count}</div>
      <Button onClick={() => onClickUp()} text="up" />
      <Button onClick={() => onClickDown()} text="down" />
    </React.Fragment>
  )
}