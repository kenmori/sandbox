import { useSelector, useDispatch } from "react-redux"
import { setName, clearName } from "./user"

function myComponent(){
  const name = useSelector(state => state.user.name)
  const email = useSelector(state => state.user.email)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>{email}</h2>
      <button onClick={() => dispatch(setName())}>Click</button>
      <button onClick={() => dispatch(clearName())}>Click</button>
    </>
  )
}

