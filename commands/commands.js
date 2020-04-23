// A list of all available commands

module.exports = async (msg) => {
    const commands = [
	'ping',
	'hello',
	'weather'
    ];
    await msg.channel.send(`The available commands are: ${commands}`);
    console.log('Available commands (sent)');
};
