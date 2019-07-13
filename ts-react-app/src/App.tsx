import React from 'react';
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./components/Routes";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import { configureStore, rootSaga } from "./redux";
import { Provider } from "react-redux";
// import { Rows } from './types/data';

// type PropsChild = {
//   children?: React.ReactNode;
//   childrenLabel: string;
// }
// const Child:React.FC<PropsChild> = (props) => (
//   <div>{props.children} { props.childrenLabel}</div>
// )
// type ThProps = {
//   row: Row;
// }

// const Th:React.FC<ThProps> = (props) => {
//   return(
//   <>
//   <Child childrenLabel="eee">
//     <div>eee</div>
//     </Child>
//   {props.row.answers.map((answers, i)=> {
//     if(answers === null) return <th>-</th>
//     return (
//       <>
//       <li key={i}>{answers} {props.row.age}</li>
//       </>
//     )
//   })};
//   </>
//   )
// }
// type Props = {
//   rows: Rows
// }

const history = createBrowserHistory();
const { store, sagaMiddleware } = configureStore(history);
sagaMiddleware.run(rootSaga);

const App:React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
      <ConnectedRouter history={history}>
          <Routes />
      </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
