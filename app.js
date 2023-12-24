const express = require('express')
const { TwitterApi } = require('twitter-api-v2')
const http = require('http')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const STATUSES = [
	`Are you scrolling intentionally or mindlessly right now? Friendly reminder to put this away if you don't mean to be here. `,
	`Are you finding enough signal in your consumption here? Friendly reminder to take a break.`,
	`Feeling dehydrated? Take a break and have some water. 💧🌊`,
	`Feeling stressed / anxious doom scrolling? 🌱 Please dont forget to take a few deep breaths`,
	`It's okay if you don't finish all that you have to today. 📋`,
	`Are you too hard on yourself? A friendly reminder to take a break`,
	`Please dont forget to take a few deep breaths 🌱`,
	`Remember to take some time to look up from twitter please`

]

const client = new TwitterApi({
	appKey: process.env.TWITTER_CONSUMER_KEY,
	appSecret: process.env.TWITTER_CONSUMER_SECRET,
	accessToken: process.env.TWITTER_TOKEN_KEY,
	accessSecret: process.env.TWITTER_TOKEN_SECRET
});

const rwClient = client.readWrite;

let app = express();
app.set('port', process.env.PORT || 3000)


app.get('/api', (req, res) => {
	console.log(`Tweeting .. `, STATUSES[Math.floor(Math.random() * STATUSES.length)])

	rwClient.v2.tweet(STATUSES[Math.floor(Math.random() * STATUSES.length)])
		.then(response => {
			console.log('Tweeted:', response.data);
			res.end(`Done #${JSON.stringify(response.data)}`);
		})
		.catch(error => {
			console.error('Error:', error);
			res.end(`Err ${error.message}`);
		});

});

app.get('/', (req, res) => {
	res.end('Humane Nudge')
});

http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'))
})

