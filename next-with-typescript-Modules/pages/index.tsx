import { Header, defaultTitle } from '../components/Header';
import { Clock as Time } from '../components/Clock';
import * as utils from '../lib/utils';
import Schedule from '../components/Schedule';

export default () => (
  <div>
    <Header title={defaultTitle} />
    <Time time={utils.getTime()} />
    <Schedule schedule={utils.getSchedule()} />
  </div>
);
