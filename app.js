const Twitter = require('twitter')

const twitter = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

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

twitter.post('statuses/update', { status: STATUSES[Math.floor(Math.random() * STATUSES.length)] })
	.then((s) => {
		console.log(`Tweeting .. `, s)
	})
	.catch((e) => {
		console.error('We have an error', e)
	})

