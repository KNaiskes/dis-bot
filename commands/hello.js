module.exports = async (msg) => {
    await setTimeout(function(){
	msg.channel.send(`Hello, ${msg.author}!`);
    }, 6000);

    console.log(`Hello ${msg.author}! (sent)`);
};
