/*
This is a utility script to convert a PEM certificate file to base64,
which can be injected as an environment variable.
How to use:
1) Generate a private key for the Github App
  (for example here: https://github.com/organizations/navikt/settings/apps/nav-apen-kildekode)
2) Download the key into this project, call it "private-key.pem"
3) Run node base64-encode-certificate.js
4) The output of the script is the value of the environment variable (which is base64 encoded).
   This value can be stored in the .env file, or in whatever secret engine is used when deploying
   the application. (Fasit or Vault?)
*/
const fs = require('fs')
console.log(fs.readFileSync('private-key.pem').toString('base64'))
