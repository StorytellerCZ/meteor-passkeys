import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { isPasskeySupported } from 'meteor/accounts-passkeys'
import { ReactiveVar } from "meteor/reactive-var";

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  passwordlessSignupFields: 'USERNAME_AND_EMAIL'
})

import './main.html';

Template.registerHelper('isLoggedIn', function () {
    return !!Meteor.userId()
  })

Template.passkeys.onCreated(function subscription () {
  Meteor.subscribe('userInfo')
})

Template.passkeys.helpers({
  usersPasskeys: function () {
    const userId = Meteor.userId()
    if (!userId) return null
    const user = Meteor.users.findOne(userId)
    // console.dir(user)
    return user?.services?.passkeys
  }
})

Template.registerPasskey.onCreated(async function checkForSupport() {
  const support = await isPasskeySupported()
  this.isSupported = new ReactiveVar(support)
  const isSupported = this.isSupported
  isPasskeySupported().then((result) => {
    console.log(result)
    isSupported.set(result)
  })
})

Template.registerPasskey.helpers({
  isSupported: function () {
    return this.isSupported()
  }
})

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
