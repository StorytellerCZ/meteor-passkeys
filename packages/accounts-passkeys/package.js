/* global Package */
Package.describe({
  version: '1.0.0',
  summary: 'Package used to enable passkey login',
});

Package.onUse(function (api) {
  api.use(['accounts-base'], ['client', 'server']);

  // Export Accounts (etc.) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use(['ecmascript', 'typescript', 'logging']);

  api.mainModule('passkeys-client.ts', 'client')
  api.addFiles('passkeys-server.ts', 'server')

  api.export('isPasskeySupported', 'client')
})

Package.onTest(function(api) {
  api.use([
    'accounts-base',
    'accounts-password',
    'ecmascript',
    'typescript',
    'tinytest',
    'random'
  ]);

  api.mainModule('server_tests.ts', 'server');
  api.mainModule('client_tests.ts', 'client');
});
