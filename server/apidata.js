Meteor.publish('Orders', function () {
  return Orders.find(); // Publishes the data
}); // end publish

Meteor.methods({
  /**
   * Gets more details about the strain from leafly
   * @param {string} strainName - name of strain needed
   * @returns {*}
   */
  getDetails(strainName) {
    let leaflyDb = HTTP.call('GET', `http://data.leafly.com/strains/${_.kebabCase(strainName)}`, {
      headers: {
        APP_ID: Meteor.settings.LEAFLY_ID,
        APP_KEY: Meteor.settings.LEAFLY_KEY
      }
    });
    return leaflyDb.data;
  },

  /**
   * Calls the database for the Menu
   * @returns {any}
   */
  getMenu() {
    return HTTP.call('GET', 'http://localhost:3000/data');
  },

  /**
   * Inserts the order into to the database.
   *
   * @param qty
   * @param size
   * @param strain
   * @param cart
   */
  addCartItem(qty, size, strain, cart) {
    //Orders.insert({
    //  dateOrdered: Date.now(),
    //  userId: Meteor.userId(),
    //  qty: qty,
    //  size: size
    //});
    console.log(qty, size, strain, cart);
  },

  sendOrder(name, qty, size, addr) {

    return HTTP.call(
      "POST",
      `https://api.twilio.com/2010-04-01/Accounts/${Meteor.settings.TWILIO_ACCOUNT_SID}/Messages`, {
        params: {
          From: Meteor.settings.TWILIO_NUMBER,
          To: "",
          Body: `Hi I'm ${name} and I'd like to place an order of:
								${qty}, ${size}
								My address is:
								${addr}`
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

/**
 * Connects app to the Kadira perf monitoring
 */
Kadira.connect(Meteor.settings.KADIRA_ID, Meteor.settings.KADIRA_KEY);