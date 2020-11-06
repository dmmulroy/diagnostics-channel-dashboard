declare module 'diagnostics_channel' {
  export class Channel<T> {
    name: string | symbol;
    hasSubscribers: boolean;
    _subscribers: any[];
    subscribe: (
      onMessage: (message: T, channelName: string | symbol) => void
    ) => void;
    unsubscribe: (
      onMessage: (message: T, channelName: string | symbol) => void
    ) => void;
    publish: (message: T) => void;
  }

  type channelFn<T> = (name: string | symbol) => Channel<T>;

  export interface DiagnosticsChannel {
    channel: <T>(name: string | symbol) => Channel<T>;
    hasSubscribers: (channelName: string | symbol) => boolean;
  }

  declare const diagnostics_channel: DiagnosticsChannel;

  export = diagnostics_channel;
}
