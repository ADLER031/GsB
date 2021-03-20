const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();



client.on('ready', () => {
	console.log('Welcomer Bot Is Online !!!');
});


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝙈𝙚𝙢𝙗𝙚𝙧');
 
    guildMember.roles.add(welcomeRole);

	const embed = new Discord.MessageEmbed()

		.setColor('#ff0000')
		.setTitle(`${guildMember.user.tag}`)
		.setURL('https://discord.gg/ntt7ns5Sbg')
		.setAuthor('Fury RolePlay', guildMember.user.displayAvatarURL, 'https://servers.fivem.net/servers/detail/vl4bvq')
		.setDescription('Welcome to Our Server , GoodLuck . \n \n ** Lotfan Bakhsh ** <#819325450874519582> **Bekhoon ta Moshkeli Barat Pish Nayad.**')
		.setThumbnail(guildMember.user.displayAvatarURL)
		.addField('Goal Members', guildMember.guild.memberCount, true)
		.setImage(guildMember.user.displayAvatarURL)
		.setTimestamp()
		.setFooter('ADLER', 'https://cdn.discordapp.com/avatars/809903662947893319/dd1ea9f001b272d89ce2562f345c0b14.png?size=1024');

    guildMember.guild.channels.cache.get('819321107198246943').send(embed);
});

client.on('guildMemberRemove', guildMember =>{

	const embed = new Discord.MessageEmbed()

		.setColor('#ff0000')
		.setTitle(`${guildMember.user.tag}`)
		.setURL('https://discord.gg/ntt7ns5Sbg')
		.setAuthor('Fury RolePlay LeaveLog', guildMember.user.displayAvatarURL, 'https://servers.fivem.net/servers/detail/vl4bvq')
		.setDescription('*Has Been Left The Server. *')
		.setThumbnail(guildMember.user.displayAvatarURL)
		.addField('Goal Members', guildMember.guild.memberCount, true)
		.setImage(guildMember.user.displayAvatarURL)
		.setTimestamp()
		.setFooter('ADLER', 'https://cdn.discordapp.com/avatars/809903662947893319/dd1ea9f001b272d89ce2562f345c0b14.png?size=1024');

    guildMember.guild.channels.cache.get('819511927356653618').send(embed);
});


client.on('message', message => {
	
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

});

client.login('ODE5MTI3NDY3NjgzNzQxNzE3.YEiF5g.-tqKDG1P5v1i-nUuYk5H65HfMa8');