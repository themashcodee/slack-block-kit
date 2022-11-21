export const decorator = {
	italic: (text: string) => `_${text}_`,
	mention: (userId: number) => `<@${userId}>`,
	channel: (channelId: string) => `<#${channelId}>`,
	bold: (text: string) => `*${text}*`,
	quote: (text: string) => `>${text}`,
};
