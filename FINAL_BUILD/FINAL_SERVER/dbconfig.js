const  config = {
    user:  'website_login', // sql user
    password:  '5TYt8#kA3s*jvtMEa0DC3PP^', //sql user password
    server:  '127.0.0.1', // if it does not work try- localhost
    database:  'Production',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
    },
    port:  1433
  }
  
  module.exports = config;