import React from 'react';
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react';
import { ChannelInner, CreateChannel, EditChannel } from './';

export default function ChannelContainer({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) {
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div class="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div class="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }
  const EmptyState = () => (
    <div class="channel-empty__container">
      <p class="channel-empty__first">
        This is the begining of your chat history
      </p>
      <p class="channel-empty__second">
        send messages, attachment, emojis and more!
      </p>
    </div>
  );

  return (
    <div class="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Mesage={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
}
