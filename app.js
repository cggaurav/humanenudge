const Twitter = require('twitter')

const twitter = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

const STATUSES = [
	`Are you scrolling intentionally or mindlessly right now? Friendly reminder to put this away if you don't mean to be here. #mindfulness #reminder`,
	`Are you wasting your valuable time? Friendly reminder to put this away if you don't mean to be here. #mindfulness #reminder`,
	`Are you finding enough signal in your consumption here? Friendly reminder to put this away if you don't mean to be here. #mindfulness #reminder`
]

twitter.post('statuses/update', { status: STATUSES[Math.floor(Math.random() * STATUSES.length)] })
	.then((s) => {
		console.log(`Tweeting .. `, s)
	})
	.catch((e) => {
		console.error('We have an error', e)
	})

