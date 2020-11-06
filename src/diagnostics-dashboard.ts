import { Channel } from 'diagnostics_channel';

interface ChannelData<T> {
  channel: Channel<T>;
  handler: (message: T, channelName: string | symbol) => void;
}

export default class DiagnosticsDashboard {
  constructor(
    private readonly channels: Map<
      string | symbol,
      ChannelData<any>
    > = new Map()
  ) {}

  subscribe<T>(channel: Channel<T>): void {
    const handler = (message: T, channelName: string | symbol): void => {
      console.log({ channelName, message });
    };

    this.channels.set(channel.name, { channel, handler });

    channel.subscribe(handler);
  }

  unsubscribe(channelName: string | symbol): void {
    if (this.channels.has(channelName)) {
      const { channel, handler } = this.channels.get(channelName)!;

      channel.unsubscribe(handler);
    }
  }
}
