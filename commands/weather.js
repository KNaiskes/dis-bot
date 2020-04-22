const getWeather = async () => {
    // by default it returs Athens weather
    try {
	const fetch = require('node-fetch');
	const fetchWeather = await fetch('https://www.metaweather.com/api/location/946738/');
	const data = await fetchWeather.json();
	return data.consolidated_weather[0].weather_state_name;
    } catch(err) {
	console.err(err);
    }
};

module.exports = async (msg) => {
    const weather = await getWeather();
    await msg.channel.send(weather);
    console.log('Weather (sent)');
};
