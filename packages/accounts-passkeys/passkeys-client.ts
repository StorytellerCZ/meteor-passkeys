import { Accounts } from 'meteor/accounts-base';
import { Log } from 'meteor/logging';

// Check availability of Passkeys in browser
if (!window.PublicKeyCredential ||
  !PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable ||
  !PublicKeyCredential.isConditionalMediationAvailable) {
  Log.debug('Passkeys are not supported on this browser')
}

export const isPasskeySupported = async () => {
  // Availability of `window.PublicKeyCredential` means WebAuthn is usable.
  // `isUserVerifyingPlatformAuthenticatorAvailable` means the feature detection is usable.
  // `isConditionalMediationAvailable` means the feature detection is usable.
  if (!window.PublicKeyCredential ||
    !PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable ||
    !PublicKeyCredential.isConditionalMediationAvailable) {
    return false
  }
  const first = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  const second = await PublicKeyCredential.isConditionalMediationAvailable()
  return first && second
}
