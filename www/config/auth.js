
/*
myURL should go where the callback is of twitter:
if (window.location.origin == 'http://localhost:3000') {
  myURL = globals.domain1;
} else if (window.location.origin == 'http://192.168.1.115:3000') {
  myURL = globals.domain2;
}


globals.js

var Globals = {
    'domain':'www.MrGlobal.com';
}

module.exports = Globals;
Then if you want to use these, use require.

var globals = require('globals'); //<< globals.js path
globals.domain //<< Domain.

// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'KvZbc8GfpjmOU2AoQ81NPrc7U',
        'consumerSecret'    : 'k0N77FqvqSgEqlEnGkfQedpu7V0wKbRJa1BNfuInicmf4YkOqD',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '901561854903-rb6dnoqj33a4mbi0p44st9cruhk99kpm.apps.googleusercontent.com',
        'clientSecret'  : '_DUwq_Md4uN1sPRKw1l-8uTZ',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
*/
