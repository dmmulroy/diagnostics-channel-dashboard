declare module 'diagnostics_channel' {
  export class Channel {
    name: string | symbol;
    hasSubscribers: boolean;
    _subscribers: any[];
    subscribe: <T>(message: T, channelName: string | symbol) => void;
    unsubscribe: <T>(message: T, channelName: string | symbol) => void;
    publish: <T>(message: T) => void;
  }
  export interface DiagnosticsChannel {
    channel: (name: string | symbol) => Channel;
    hasSubscribers: (channelName: string | symbol) => boolean;
  }

  declare const diagnostics_channel: DiagnosticsChannel;

  export = diagnostics_channel;
}
