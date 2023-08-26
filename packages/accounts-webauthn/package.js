/* global Package */
Package.describe({
  version: '1.0.0',
  summary: 'Utility package to utilize webauthn.',
});

Package.onUse(function (api) {
  api.use(['accounts-base'], ['client', 'server']);

  // Export Accounts (etc.) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use(['ecmascript', 'typescript', 'logging', 'random']);

  api.mainModule('webauth-server.ts', 'server');
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
