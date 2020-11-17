const http = require('http');
const fs = require('fs');
const path = require('path');

const { Server } = require('socket.io');

const indexHtml = fs.readFileSync(path.join(__dirname, './index.html'));

const requestListener = (req, res) => {
  switch (req.url) {
    case '/': {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(indexHtml);
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
      break;
    }
  }
};

class DiagnosticsDashboard {
  constructor({ port = 3939, host = 'localhost' } = {}) {
    this.channels = new Map();
    this.sockets = new Map();
    this.server = http.createServer(requestListener);

    this.server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });

    this.io = new Server(this.server);

    console.log(this.io);
  }

  subscribe(channel) {
    channel.subscribe(this.onMessage);

    this.channels.set(channel.name, channel);
  }

  unsubscribe(channel) {
    if (this.channels.has(channel.name)) {
      this.channels.get(channel.name).unsubscribe(this.onMessage);
    }
  }

  onMessage = (message, channelName) => {
    console.log(JSON.stringify({ channelName, message }, null, 2));
    this.io.emit('message', { channelName, message });
  };
}

module.exports = DiagnosticsDashboard;
