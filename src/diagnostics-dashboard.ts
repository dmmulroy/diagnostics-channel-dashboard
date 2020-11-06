import dc, { Channel } from 'diagnostics_channel';

export default class DiagnosticsDashboard {
  constructor(
    private readonly channels: Map<string | symbol, Channel<any>> = new Map()
  ) {}
  subscribe<T>(channel: Channel<T>): void {
    this.channels.set(channel.name, channel);

    channel.subscribe((message, channelName) => {
      console.log({ channelName, message });
    });
  }
}
