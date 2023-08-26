import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';

export async function generateRegistrationOptions() {
  const challenge = Random.secret();
  const user = Meteor.user()
  if (!user) return {}

  return {
    userId: user._id,
    username: user.username || user._id,
  }
}
