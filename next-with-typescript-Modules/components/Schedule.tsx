interface Flight {
  from: string;
  to: string;
  time: string;
}

interface Props {
  schedule: Flight[];
}

export default ({ schedule }: Props) => {
  return (
    <ul>
      {schedule.map(({ from, to, time }, i) => {
        return (
          <li key={i}>
            {from} &mdash; {to} <time>{time}</time>
          </li>
        );
      })}
    </ul>
  );
};
