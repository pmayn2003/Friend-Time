import { Message, MessageReaction, User } from 'discord.js';

import { EventData } from '../models/internal-models';

export interface Reaction {
    emoji: string;
    requireGuild: boolean;
    requireSentByClient: boolean;
    execute(
        msgReaction: MessageReaction,
        msg: Message,
        reactor: User,
        data: EventData
    ): Promise<void>;
}
