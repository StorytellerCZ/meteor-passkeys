import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  passkeysCreateChallenge: function () {
    // TODO
  },
  passkeysRegister: function () {
    const userId = Meteor.userId
    if (!userId) return null

  }
})
