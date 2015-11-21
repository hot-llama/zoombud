Meteor.publish('Menu', function () {
	return MenuData.find(); // Publishes the data
}); // end publish

Meteor.methods({
	getDetails(strainName) {
		let leaflyDb = HTTP.call('GET', `http://data.leafly.com/strains/${_.kebabCase(strainName)}`, {
			headers: {
				APP_ID: Meteor.settings.LEAFLY_ID,
				APP_KEY: Meteor.settings.LEAFLY_KEY
			}
		});
		return leaflyDb.data;
	},

	getMenu() {
		return HTTP.call('GET', 'http://localhost:3000/data');
	},

	sendOrder() {
		return HTTP.call(
			"POST",
			`https://api.twilio.com/2010-04-01/Accounts/${Meteor.settings.TWILIO_ACCOUNT_SID}/Messages`, {
				params: {
					From: Meteor.settings.TWILIO_NUMBER,
					To: "",
					Body: "Hi! I'm sending from a webapp!!"
				},
				// Set your credentials as environment variables
				// so that they are not loaded on the client
				auth: `${Meteor.settings.TWILIO_ACCOUNT_SID}:${Meteor.settings.TWILIO_AUTH_TOKEN}`
			},
			// Print error or success to console
			function (error) {
				if (error) {
					console.log(error);
				}
				else {
					console.log('SMS sent successfully.');
				}
			}
		);
	}
});