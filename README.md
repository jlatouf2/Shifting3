Ionic App Base
==============
https://shitapp01.herokuapp.com/#/app/peopleline

git add .
$ git commit -m "Added a Procfile."
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-lowlands-8408... done, stack is cedar
http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
$ git push heroku master
...
-----> Node.js app detected
...
-----> Launching... done
       http://arcane-lowlands-8408.herokuapp.com deployed to Heroku



/*
REFER TO https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
FOR THE MONGOOSE CODE EXPLANATION
*/

var Store   = require('./www/config/storelocation');
var Storeline = require('./www/config/storeline.js')
var Track = require('./www/config/trackPosition.js')
var PeopleLine = require('./www/config/peopleline.js')
var UserStuff = require('./www/config/userinfo.js');
var User   = require('./www/config/user');
var Blue = require('./www/config/userblack.js');

app.use(express.static(path.join(__dirname, 'www')));
app.use(express.static(path.join(__dirname, '/')));
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', resave: true, saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./www/config/passport')(passport); // pass passport for configuration
require('./www/routes/routes.js')(app, passport);


// 1) ADD REQUIRE MONGOOSE:
var mongoose = require('mongoose');

// 2) CONNECT MONGOOSE
 mongoose.connect('mongodb://localhost/myappANG' , { useMongoClient: true });

// 3) SIMPLE CHECK TO SEE IF CONNECTED TO DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {    console.log('Connected to DB!');   });




// grab the things we need
//  var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  date: { type: Date },

  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Usertwo = mongoose.model('Usertwo', userSchema);

//curl -X POST  http://localhost:3000/signup22
//curl -X POST -H 'Content-Type: application/json' -d '{"fname":"davidwalshr","lname":"davidwalshr","email":"davidwalshr","password":"fsomethingt", "passwordConf": "fsomethingt"}' http://localhost:3000/signup22

/*---------- SIGNUP FUNCTION: --------------*/

app.post('/signup22', function (req, res, next) {
      if (req.body.password !== req.body.passwordConf) {
          var err = new Error('Passwords do not match.');
          err.status = 400;
          res.send("passwords dont match");
          return next(err);
        }

      if (req.body.email && req.body.fname &&
          req.body.lname && req.body.password &&
          req.body.passwordConf) {

        var userData = {
          email: req.body.email, firstname: req.body.fname,
          lastname: req.body.lname, password: req.body.password,
          passwordConf: req.body.passwordConf
        }
        //use schema.create to insert data into the db
        Blue.create(userData, function (err, user) {
          if (err) { return next(err)
          } else {
            res.send(user)
          //  return res.redirect('/profile');
          }
        });
      }
});

/*---------- LOGIN FUNCTION: --------------*/

/*   var Blue = require('./models/userblack.js');

//curl -X POST  http://localhost:3000/login22999
curl -X POST -H 'Content-Type: application/json' -d '{"email":"jlatouf23333@gmail.com", "password":"jarredl"}' http://localhost:3000/login22999

curl -X POST -H 'Content-Type: application/json' -d '{"email":"davidwalshr","password":"fsomethingt"}' http://localhost:3000/login22999

//token
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var token2 = jwt.sign('token', 'shhhhh');
console.log('TOKEN ' + token);
console.log('TOKEN2 ' + token2);

var decoded = jwt.verify(token, 'shhhhh');
console.log('decoded ' + decoded.foo);

*/


app.post('/login22999', function(req, res) {
  Blue.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {

        //  console.log(user);
          // if user is found and password is right create a token
        //  var token = jwt.sign(user, config.secret);
          // return the information including token as JSON
          //res.json({success: true});
          var secretKey = 'secrettoken';


        //  var token = jwt.sign({ foo: 'bar' }, secretKey);
          //console.log('TOKEN2 ' + token);

          console.log("USER FIRSTNAME" +user.firstname);

          var token = jwt.sign(user.firstname, secretKey);
          console.log('TOKEN ' + token);
          var push;
          var decoded = jwt.verify(token, secretKey);
          console.log('decoded: ' + decoded);
          console.log(user);
        //  var bob = user.push(token)
          //mything.NewField = 'foo';
    //      user.tokens = token;


          res.send({'user': user, 'token': token});

        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});


//    curl -X POST -H 'Content-Type: application/json' -d '{"email":"davidwalshr","password":"fsomethingt"}' http://localhost:3000/login3333







      /*---------- FACEBOOK LOGIN  --------------*/

      app.get('/auth/facebook', passport.authenticate('facebook', {scope:'email'}));

      app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/#/login' }),
        function(req, res, user) {
        user : req.user // get the user out of session and pass to template
        sess=req.session;       sess.data=req.user;
        console.log("THIS IS THE USER STUFF"  + sess);
        console.log("THIS IS THE USER STUFF"  + sess.data);
        console.log("THIS IS THE USER _id"  + sess.data.facebook._id);
        console.log("THIS IS THE USER email"  + sess.data.facebook.email);
        console.log("THIS IS THE USER TOKEN"  + sess.data.facebook.token);
        console.log("THIS IS THE USER PHOTOS"  + sess.data.facebook.photos);
        res.redirect('/#/app/profile');


        });

        passport.use(new FacebookStrategy({
              clientID: '1508673329451547', clientSecret: 'c42fb352fa1a185823ddd34f6267551c',
              callbackURL: "http://localhost:3000/auth/facebook/callback",
              profileFields: ['id', 'displayName', 'link',  'photos', 'emails']

              },
              function(accessToken, refreshToken, profile, done) {
                  process.nextTick(function () {
                //     User.findOne({'facebook.id' : profile.id, 'facebook.name' : profile.name, 'facebook.email' : profile.email}, function (err, user) {
               User.findOne({'facebook.email' : profile.emails[0].value}, function (err, user) {

                    if (err) return done(err);
                       console.log('ERROR');

                    if (user) {
                      console.log('FOUND');     console.log(user);

                     return   done(null, user);

                    } else {
                      console.log('NEW');

                        var newUser = new User();
                        newUser.facebook.token = accessToken;
                        newUser.facebook.email = profile.emails[0].value;
                        newUser.facebook.id = profile.id;
                        newUser.facebook.name = profile.displayName;
                        newUser.facebook.photos = profile.photos;
                        newUser.facebook.password = profile.password;
                        console.log('PASSWORD' + profile.password)

                        console.log('ACCESSTOKEN' + accessToken);   console.log('EMAIL' + profile.emails[0].value);
                         console.log('NAME' + profile.displayName);   console.log('ID' + profile.id);
                         console.log('PHOTOS1' + profile.photos[0]);  console.log('PHOTOS3' + profile.photos[0].value);

                                 newUser.save(function(err) {
                              if (err)
                                  throw err;
                              // if successful, return the new user
                              return done(null, newUser);

                          });
                          }
                      });
                  });
              }
          ));





   // =========================================================================
   // GOOGLE ==================================================================
   // =========================================================================

   // =====================================
   // GOOGLE ROUTES =======================
   // =====================================
   // send to google to do the authentication
   // profile gets us their basic information including their name
   // email gets their emails
   app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

   // the callback after google has authenticated the user
  /* app.get('/auth/google/callback',  passport.authenticate('google', {
   								successRedirect : '/#/profile',
   								failureRedirect : '/#/login'
   				}));

          app.get('/auth/google/callback',  passport.authenticate('google', {
                          successRedirect : '/#/profile',
                          failureRedirect : '/#/login'
                  }));

*/



   				app.get('/connect/google', passport.authenticate('google', {
       scope: [
           'https://www.googleapis.com/auth/userinfo.profile',
           'https://www.googleapis.com/auth/userinfo.email'
       ]
   }));


    app.get('/auth/google/callback',  passport.authenticate('google', { failureRedirect : '/#/login' }),
    function(req, res, user) {

      user : req.user // get the user out of session and pass to template
      sess=req.session;       sess.data=req.user;
      console.log("THIS IS THE USER STUFF"  + sess);
      console.log("THIS IS THE USER STUFF"  + sess.data);
      console.log("THIS IS THE USER _id"  + sess.data.google.id);
      console.log("THIS IS THE USER email"  + sess.data.google.email);
      console.log("THIS IS THE USER TOKEN"  + sess.data.google.token);
      res.redirect('/#/app/profile');


      });

/*
<strong>id</strong>: <%= user.google.id %><br>
<strong>token</strong>: <%= user.google.token %><br>
<strong>email</strong>: <%= user.google.email %><br>
<strong>name</strong>: <%= user.google.name %>
*/


   passport.use(new GoogleStrategy({

       clientID        : '901561854903-rb6dnoqj33a4mbi0p44st9cruhk99kpm.apps.googleusercontent.com',
       clientSecret    : '_DUwq_Md4uN1sPRKw1l-8uTZ',
       callbackURL     : 'http://localhost:3000/auth/google/callback',

   },
   function(token, refreshToken, profile, done) {

       // make the code asynchronous
       // User.findOne won't fire until we have all our data back from Google
       process.nextTick(function() {

           // try to find the user based on their google id
           User.findOne({ 'google.id' : profile.id }, function(err, user) {
               if (err)
                   return done(err);

               if (user) {

                   // if a user is found, log them in
                   return done(null, user);
               } else {
                   // if the user isnt in our database, create a new user
                   var newUser          = new User();

                   // set all of the relevant information
                   newUser.google.id    = profile.id;
                   newUser.google.token = token;
                   newUser.google.name  = profile.displayName;
                   newUser.google.email = profile.emails[0].value; // pull the first email


                   console.log('ACCESSTOKEN' + token);   console.log('EMAIL' + profile.emails[0].value);
                    console.log('NAME' + profile.displayName);   console.log('ID' + profile.id);


                   // save the user
                   newUser.save(function(err) {
                       if (err)
                           throw err;
                       return done(null, newUser);
                   });
               }
           });
       });

   }));




   // =====================================
   // TWITTER ROUTES =======================
   // =====================================

   app.get('/auth/twitter', passport.authenticate('twitter'), function(req,res,user) {


   });

/*
   // handle the callback after twitter has authenticated the user
   app.get('/auth/twitter/callback',passport.authenticate('twitter', {
           successRedirect : '/#/profile',
           failureRedirect : '/#/login'
       }));
*/


//curl -X POST  http://localhost:3000/jp

app.post('/jp', function (req, res) {
/*  var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  console.log('http://' + hostname );
*/
  console.log('This worked!');
  var hostname = req.headers.host; // hostname = 'localhost:8080'
  console.log('http://' + hostname );

  if (hostname == 'localhost:3000') {
     global.myhostCallback = 'http://localhost:3000/auth/twitter/callback';
     console.log(global.myhostCallback);
  } else if (hostname == "192.168.1.115:3000") {
    global.myhostCallback = 'http://192.168.1.115:3000/auth/twitter/callback';
    console.log(global.myhostCallback);

  }

  });


       app.get('/auth/twitter/callback',  passport.authenticate('twitter', { failureRedirect : '/#/login' }),
       function(req, res, user) {

         user : req.user // get the user out of session and pass to template
         sess=req.session;       sess.data=req.user;
         console.log("THIS IS THE USER STUFF"  + sess);
         console.log("THIS IS THE USER STUFF"  + sess.data);
         console.log("THIS IS THE USER _id"  + sess.data.twitter.id);
         console.log("THIS IS THE USER email"  + sess.data.twitter.email);
         console.log("THIS IS THE USER TOKEN"  + sess.data.twitter.token);
         res.redirect('/#/app/profile');


         });

/*

<strong>id</strong>: <%= user.twitter.id %><br>
<strong>token</strong>: <%= user.twitter.token %><br>
<strong>username</strong>: <%= user.twitter.username %><br>
<strong>displayName</strong>: <%= user.twitter.displayName %>

http://192.168.1.115:3000/auth/twitter/callback

var hostname = req.headers.host; // hostname = 'localhost:8080'
var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
console.log('http://' + hostname );

*/



       passport.use(new TwitterStrategy({

           consumerKey     : 'KvZbc8GfpjmOU2AoQ81NPrc7U',
           consumerSecret  : 'k0N77FqvqSgEqlEnGkfQedpu7V0wKbRJa1BNfuInicmf4YkOqD',
           callbackURL     : 'http://localhost:3000/auth/twitter/callback'

       },
       function(token, tokenSecret, profile, done) {

           // make the code asynchronous
       // User.findOne won't fire until we have all our data back from Twitter
           process.nextTick(function() {

               User.findOne({ 'twitter.id' : profile.id }, function(err, user) {

                   // if there is an error, stop everything and return that
                   // ie an error connecting to the database
                   if (err)
                       return done(err);

                   // if the user is found then log them in
                   if (user) {
                       return done(null, user); // user found, return that user
                   } else {
                       // if there is no user, create them
                       var newUser                 = new User();

                       // set all of the user data that we need
                       newUser.twitter.id          = profile.id;
                       newUser.twitter.token       = token;
                       newUser.twitter.username    = profile.username;
                       newUser.twitter.displayName = profile.displayName;

                       // save our user into the database
                       newUser.save(function(err) {
                           if (err)
                               throw err;
                           return done(null, newUser);
                       });
                   }
               });

       });
     }));



        /*---------- CONFIRM LOGIN  --------------*/

        app.get('/confirm-login', function (req, res) {
        	user = req.user;     res.send(user);
          });


          /*---------- LOGOUT  --------------*/

        app.get('/logout', function(req, res, sess) {
              req.logout();     sess.destroy;
              console.log("THIS IS THE USER STUFF"  + sess.data);
              var data;         res.send(data)
          });







//curl -X POST  http://localhost:5000/stuff
app.post('/stuff', function (req, res, next) {
  console.log("Worked!");

})


/*---------- STORENAME FUNCTION: --------------*/
//curl -X POST  http://localhost:8100/storeName

app.post('/storeName', function (req, res, next) {
    Store.find( {postal: req.body.postal})
      .exec(function(err, posts) {
        if (err) { return next(err) }
           var black = JSON.stringify(posts);

      res.send(posts)
      console.log(black ); console.log(posts );

      })
})


/*---------- SEARCH STORE --------------*/

app.post('/storenameSearch', function (req, res, next) {
    Store.find( {store: req.body.store})
      .exec(function(err, posts) {
        if (err) { return next(err) }
    res.send(posts); console.log(posts );
      })
})



/*---------- ADDSTORE FUNCTION: --------------*/
app.post('/addStore', function (req, res, next) {
    var store = new Store({
    store: req.body.store,  postal: req.body.postal,
    latitude: req.body.latitude, longitude: req.body.longitude,
    Adminpassword: req.body.Adminpassword  })

    store.save(function (err, post) {
      if (err) { return next(err) }
     res.json(201, post)
     console.log(post);
  })
})

/*---------- ADDSTORE FUNCTION: --------------*/
app.post('/getLineCoordinates', function (req, res, next) {
  Store.find( {store: req.body.store})
    .exec(function(err, posts) {
      if (err) { return next(err) }
    res.send(posts);  console.log(posts );
    })
})



/*---------- DELETE STORE  --------------*/
//curl -X POST  http://localhost:3000/deleteStore

app.post('/deleteselectedStore', function (req, res, next) {
  Store.remove({store: req.body.store}, function(err,removed) {
      Store.find().exec(function(err, posts) {
        if (err) { return next(err) }
        res.send(posts);      console.log(posts);
      })
  });
})



/*---------- DELETE STORE  --------------*/

  app.post('/deleteStore44', function (req, res, next) {
    //DELETE FUNCTION:
    console.log("store: " + req.body.store);
    Store.remove({store: req.body.store}, function(err,removed) {
        Store.find().exec(function(err, posts) {
          if (err) { return next(err) }
          res.send(posts);      console.log(posts);
        })
      });
    });


    /*---------- LINE NUMBER FUNCTION: --------------*/
    //curl -X POST  http://localhost:3000/numberofLines

  app.post('/numberofLines', function (req, res, next) {
      Storeline.find({store: req.body.store}, function( err, count){
          console.log( "Number of users:", count );   res.send(count)
        })
  })



  /*---------- LOGIN FUNCTION: --------------*/
  //curl -X POST  http://localhost:3000/addLine1

  app.post('/addLine1', function (req, res, next) {
    console.log("number sent to DB: " + req.body.line);
    console.log("token: " + req.body.Adminpassword);

          Storeline.count({ $and: [{store: req.body.store}, {line:req.body.line}]}   )
            .exec(function(err, count) {
                if (err) { return next(err) }

             console.log( "Number of users:", count );
            if (count == 1) {
              console.log('fcn ended b/c its in table');
          } else {

              var storeline = new Storeline({
              store: req.body.store, line: req.body.line,
              Adminpassword: req.body.Adminpassword   })

              storeline.save(function (err, post) {
                if (err) { return next(err) }
                res.send(post)
          })
        }
    })
  })

  /*---------- DELETE LINES  --------------*/
  //curl -X POST  http://localhost:3000/deleteStore

  app.post('/deleteselectedLine', function (req, res, next) {
    console.log('store: '+req.body.store);
    console.log('line: '+req.body.line);
    Storeline.remove({ $and: [{store: req.body.store}, {line: req.body.line}]}, function(err,removed) {
      Storeline.find({store: req.body.store}).exec(function(err, posts) {
        if (err) { return next(err) }
        res.send(posts);      console.log(posts);
      })
    });
  })




    /*---------- CHECKLINEADMIN --------------*/

    app.post('/checkLineAdmin', function (req, res, next) {
      var bob = req.body.store;    var bob2 = req.body.Adminpassword;
      console.log("Store: "+ bob);  console.log("Admin: "+ bob2);

      if(bob2 !== undefined) {
      //  Store.find( {store: req.body.store}).where({Adminpassword: bob})
      //  THIS WORKS, ITS JUST THAT WHEN YOU DONT HAVE TOKEN [ITS SET TO NULL WHEN NOT LOGGED IN]
      //  IT MATCHES THE QUEREY B/C IT FINDS A OBJECT WITH THE STORE NAME AND TOKEN=NULL
      //Storeline.count({ $and: [{store: req.body.store}, {line:req.body.line}]}   )

        Store.find( {store: req.body.store, Adminpassword: req.body.Adminpassword})
          .exec(function(err, posts) {
            if (err) { return next(err) }
          res.send(posts);  console.log(posts);
      //Either passes no data back: store that doesn't have Adminpassword or passes store with Adminpassword
          })
      } else{
        console.log("Adminpassword was equal to undefined so query did not run!");
      }
    })

    app.post('/getPeopleLine', function (req, res, next) {
      PeopleLine.find({ $and: [{store: req.body.store}, {line: req.body.line}]})
        .exec(function(err, posts) {
            if (err) { return next(err) }
            res.send(posts);    console.log(posts );
          })
    })


    /*---------- ADDSTORE FUNCTION: --------------*/
    app.post('/getLineCoordinates', function (req, res, next) {
      Store.find( {store: req.body.store})
        .exec(function(err, posts) {
          if (err) { return next(err) }
        res.send(posts);  console.log(posts );
        })
    })

    /*---------- PEOPLELINE INFO  --------------*/
    //curl -X POST localhost:3000/peoplelineInfo

    app.post('/peoplelineInfo', function (req, res, next) {
      var newUser2 = PeopleLine({
        email : req.body.email, line: req.body.line,
        position: req.body.position,  store: req.body.store,
        fullname : req.body.fullName,  longitude: req.body.longitude,
        latitude: req.body.latitude,  distance: req.body.distance
      });

      newUser2.save(function (err, post) {
        if (err) {return next(err); }
        res.send(post);     console.log(post);
      });
    });


    /*---------- DELETE PEOPLE  --------------*/
    //curl -X POST  http://localhost:3000/deleteStore

    app.post('/deletePeopleLine44', function (req, res, next) {
      Storeline.remove({line: req.body.line}, function(err,removed) {
        Storeline.find({store: req.body.store}, {line: req.body.line}).exec(function(err, posts) {
        if (err) { return next(err) }
        res.send(posts);    console.log(posts);
          })
      });
    })




    /*---------- CHECKPEOPLE FUNCTION: --------------*/
      app.post('/checkPeopleAdmin', function (req, res, next) {
        var bob = req.body.store; var bob2 = req.body.Adminpassword;
        console.log("Store: "+ bob);  console.log("Admin: "+ bob2);

        if(bob2 !== undefined) {
          Store.find( {store: req.body.store, Adminpassword: req.body.Adminpassword})
            .exec(function(err, posts) {
              if (err) { return next(err) }

          res.send(posts);  console.log(posts);
            })
        } else{
          console.log("Adminpassword was equal to undefined so query did not run!");
        }
      })




A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/ionic-team/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic cordova
```

Then run:

```bash
$ ionic start myProject tabs --type=ionic1
```

More info on this can be found on the Ionic [Getting Started](https://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/ionic-team/ionic-cli) repo.

## Issues

Issues have been disabled on this repo. If you do find an issue or have a question, consider posting it on the [Ionic Forum](https://forum.ionicframework.com/). If there is truly an error, follow our guidelines for [submitting an issue](https://ionicframework.com/submit-issue/) to the main Ionic repository.
