import { Channel } from 'diagnostics_channel';

export interface DiagnosticsDashboard {
  subscribe: (channel: Channel) => void;
  unsubscribe: (channel: Channel) => void;
}
