import { Meteor } from 'meteor/meteor';
import { SSL } from 'meteor/storyteller:ssl';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.isDevelopment) {
    const key = Assets.getText('localhost-key.pem')
    const cert = Assets.getText('localhost.pem')
    SSL(key, cert, 3002)
  }
});

// Accounts.config()

Meteor.publish('userInfo', function () {
  const userId = Meteor.userId()
  if (!userId) return this.ready()

  return Meteor.users.find(userId)
})
