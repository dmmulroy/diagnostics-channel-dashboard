const diagnostics_channel = require('diagnostics_channel');

const DiagnosticsDashboard = require('./lib/diagnostics-dashboard');

const dash = new DiagnosticsDashboard();

const myChannel = diagnostics_channel.channel('my-channel');

dash.subscribe(myChannel);

let count = 0;

setInterval(() => {
  myChannel.publish(count++);
}, 1000);
