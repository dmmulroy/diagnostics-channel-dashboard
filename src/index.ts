import dc, { Channel } from 'diagnostics_channel';

import DiagnosticsDashboard from './diagnostics-dashboard';

const dash = new DiagnosticsDashboard();
const myChannel = dc.channel<number>('test');

dash.subscribe(myChannel);

let count = 10;

const timer = setInterval(() => {
  myChannel.publish(count--);
  if (count === 0) {
    clearInterval(timer);
  }
}, 500);
