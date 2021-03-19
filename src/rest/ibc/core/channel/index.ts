import { codec } from '../../../../types';
import { ibc } from '../../../../proto';
export * as channel from './module';

codec.register('/ibc.core.channel.v1.Channel', ibc.core.channel.v1.Channel, ibc.core.channel.v1.Channel.fromObject);
codec.register('/ibc.core.channel.v1.Counterparty', ibc.core.channel.v1.Counterparty, ibc.core.channel.v1.Counterparty.fromObject);
codec.register('/ibc.core.channel.v1.Packet', ibc.core.channel.v1.Packet, ibc.core.channel.v1.Packet.fromObject);
codec.register(
  '/ibc.core.channel.v1.MsgAcknowledgement',
  ibc.core.channel.v1.MsgAcknowledgement,
  ibc.core.channel.v1.MsgAcknowledgement.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelCloseConfirm',
  ibc.core.channel.v1.MsgChannelCloseConfirm,
  ibc.core.channel.v1.MsgChannelCloseConfirm.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelCloseInit',
  ibc.core.channel.v1.MsgChannelCloseInit,
  ibc.core.channel.v1.MsgChannelCloseInit.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelOpenAck',
  ibc.core.channel.v1.MsgChannelOpenAck,
  ibc.core.channel.v1.MsgChannelOpenAck.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelOpenConfirm',
  ibc.core.channel.v1.MsgChannelOpenConfirm,
  ibc.core.channel.v1.MsgChannelOpenConfirm.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelOpenInit',
  ibc.core.channel.v1.MsgChannelOpenInit,
  ibc.core.channel.v1.MsgChannelOpenInit.fromObject,
);
codec.register(
  '/ibc.core.channel.v1.MsgChannelOpenTry',
  ibc.core.channel.v1.MsgChannelOpenTry,
  ibc.core.channel.v1.MsgChannelOpenTry.fromObject,
);
codec.register('/ibc.core.channel.v1.MsgRecvPacket', ibc.core.channel.v1.MsgRecvPacket, ibc.core.channel.v1.MsgRecvPacket.fromObject);
codec.register(
  '/ibc.core.channel.v1.MsgTimeoutOnClose',
  ibc.core.channel.v1.MsgTimeoutOnClose,
  ibc.core.channel.v1.MsgTimeoutOnClose.fromObject,
);
codec.register('/ibc.core.channel.v1.MsgTimeout', ibc.core.channel.v1.MsgTimeout, ibc.core.channel.v1.MsgTimeout.fromObject);
