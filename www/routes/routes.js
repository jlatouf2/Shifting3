// app/routes.js
module.exports = function(app, passport) {
	var flash    = require('connect-flash');

	// show the login form
	//curl -X POST localhost:3000/login
	app.get('/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// show the signup form
	app.get('/anotherpage', function(req, res) {
		res.render('anotherpage.ejs');
	});

/*
	app.get('/signup', function(req, res) {
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});
*/

	/*


	//THIS WORKS FOR THE REGISTER I CREATED FOR THIS APPLICATION....
	  curl -H "Accept: application/json" -H \ "Content-type: application/json" -X POST \
	-d '{"email": "jarredl", "password": "paassword2"}' \  http://localhost:3000/signup

	curl -H "Accept: application/json" -H \ "Content-type: application/json" -X POST \
-d '{"email": "jarredla", "password": "password44"}' \http://localhost:3000/signup


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect :  '/#/profile', // redirect to the secure profile section
		failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

*/


// process the signup form

app.post('/signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (user) {
      console.log(user);  console.log(user._id);
      console.log(user.local);  console.log(user.local.email);
      //  return user;

      return res.status(200).json({
        status: 'Registration successful!',
				user: user
      });

    } else {
      return res.status(500).json({
        err: err
      });

    }
  })(req, res, next);
});


	app.get('/signup2', function(req, res, next) {  res.redirect('/#/profile');  });

/*
//THIS WORKS FOR THE REGISTER I CREATED FOR THIS APPLICATION....
	curl -H "Accept: application/json" -H \ "Content-type: application/json" -X POST \
-d '{"email": "jarredl", "password": "paassword2"}' \ http://localhost:3000/login
*/


	app.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (user) {
      console.log(user.local.email);
       return res.status(200).json({ status: 'Login Successful!', user: user  });
    } else {
      return res.status(500).json({
        err: err
      });
    }
  })(req, res, next);
});


	// PROFILE SECTION =========================

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', { user : req.user  });
	});


	//curl -X POST localhost:3000/logout

	// LOGOUT ==============================

	app.post('/logout', function(req, res, user) {
		//req.logout();
		console.log("This is some data to check if still something: " + user.local.email);
		//user = null;
		res.status(200).json({
			status : 'Bye!'
		});

	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
