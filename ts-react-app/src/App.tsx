import React from 'react';
import './App.css';
import { Row, Rows } from './types/data';

type ThProps = {
  row: Row;
}

const Th:React.FC<ThProps> = ({row}) => {
  return(
  <>
  {row.answers.map((answers, i)=> {
    if(answers === null) return <th>-</th>
    return (
      <>
      <li key={i}>{answers} {row.age}</li>
      </>
    )
  })};
  </>
  )
}
type Props = {
  rows: Rows
}

const App:React.FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      {props.rows.map((row, i)=> {
        return (
          <Th key={i} row={row} />
          );
      })}
    </div>
  );
}

export default App;
