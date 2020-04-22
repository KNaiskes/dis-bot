// include all available  commands
const ping = require('./ping');
const hello = require('./hello');
const weather = require('./weather');

const clientId = process.env.CLIENT_ID;
const channelId = process.env.CHANNEL_ID

const commands = {
    ping,
    hello,
    weather,
};

module.exports = async (msg) => {
    if(msg.channel.id === channelId) {
	const args = msg.content.split(' ');
	if(args[0].charAt(0) !== '!' || args.length == 0) return;
	const command = args.shift().substr(1);
	if (Object.keys(commands).includes(command)) {
	    commands[command](msg, args);
	}
    }
};
