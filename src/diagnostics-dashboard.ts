import dc, { Channel } from 'diagnostics_channel';

class DiagnosticsDashboard {
  // private channels: Map<string | symbol, Channel>;
  constructor(private channels: Map<string | symbol, Channel>) {}
  subscribe(channel: Channel): void {
    this.channels.set(channel.name, channel);
  }
}
