interface Props {
  time: string;
}

export const Clock = ({ time }: Props) => (
  <div>
    Time: <time>{time}</time>
  </div>
);
