export const defaultTitle = 'Airport Departures';

interface Props {
  title: string;
}

export const Header: React.FunctionComponent<Props> =({ title }) => {
  return <h1>{title}</h1>;
};
