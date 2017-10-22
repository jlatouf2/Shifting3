'use strict';

angular.module('starter').factory('AuthService' ,
  function ($rootScope, $http, $location) {

        $rootScope.lineups2 = ['Jarred', 'Jacob', 'Johna!'];
        $rootScope.storesAvailable = ['BestBuy', 'Kmart', 'Target', 'Zehrs'];
        $rootScope.peopleLine = ['Marcus', 'Dom', 'Brain'];
        $rootScope.lineNumber = [1, 2, 3];

        return ({
          loginExample2: loginExample2,
          RegisterExample: RegisterExample,
          RegisterExample4: RegisterExample4,
          LoginExample3: LoginExample3,
          logout: logout,
          confirm: confirm
        });

    function loginExample2(email, password){
        console.log('email' + email);  console.log('password' + password);

        $http.post('/login', {email : email, password : password} )
           .success(function( data) {
              console.log (data);
              $location.path('/app/profile');
              console.log(data.user.local); console.log(data.user.local.email); console.log(data.user.local.password);
              $rootScope.userdata = data;

              //Its refered to as local because its stored in the database as local:
              $rootScope.userInfo= data.user.local; $rootScope.userEmail = data.user.local.email;
              $rootScope.userPassword = data.user.local.password;
              }, function(posts) {});
    }


    function RegisterExample(email, password, fname, lname){
          console.log('firstname' + email);   console.log('lastname' + password);

            $http.post('/signup', {email : email, password : password } )
            .success(function( data) {
              console.log (data);
              $location.path('/app/profile');
              console.log(data.user.local); console.log(data.user.local.email); console.log(data.user.local.password);

              $rootScope.userdata = data;
              $rootScope.userName = data.user.local;
              console.log('This is the username in $rootScope: ' + $scope.userName);

              }, function(posts) {});

    }


    function RegisterExample4(fname, lname, email, password,  passwordConf){
          console.log('fname: ' + fname); console.log('lname: ' + lname);
          console.log('email: ' + email); console.log('password: ' + password);
          console.log('passwordConf: ' + passwordConf);

            $http.post('/signup22', { fname: fname, lname: lname, email : email, password : password, passwordConf: passwordConf } )
            .success(function( data) {
              console.log (data);
              $location.path('/app/profile');

              console.log(data.user_id); console.log(data.firstname);
              console.log(data.email); console.log(data.password);

              $rootScope.userdata = data;
              $rootScope.fullName= data.firstname +" "+ data.lastname;
              $rootScope.userid= data._id;  $rootScope.userEmail = data.email;
              $rootScope.userPassword = data.password;
              }, function(posts) {});
    }


    function LoginExample3(email, password){
        console.log('email: ' + email); console.log('password: ' + password);

      $http.post('/login22999', {email : email, password : password} )
         .success(function( data) {
           console.log (data);
           console.log (data.user);
           console.log (data.token);
           console.log ('THIS WORKED REALLY WELL OK BIG FELLA!');

           $location.path('/app/profile');


            $rootScope.userdata = data;
            //Its refered to as local because its stored in the database as local:
            $rootScope.fullName= data.user.firstname +" "+ data.user.lastname;
            $rootScope.userid= data.user._id; $rootScope.useremail = data.user.email;
            $rootScope.userPassword = data.user.password;
            $rootScope.usertoken = data.token;
            }, function(posts) {});
    }


    function logout() {
            $rootScope.userdata = null;
            $rootScope.useremail = null;  $rootScope.username = null;
            $rootScope.userid = null;     $rootScope.usertoken = null;
            $rootScope.userEmail = null;  $rootScope.fullName = null;
            $rootScope.userid = null;     $rootScope.userPassword = null;
            $http.get('/logout')
              .success(function (data) {    console.log('LOGGED OUT!');    })
              .error(function (data) {      console.log('NOT LOGGED OUT!');   });
              $location.path('/app/home');
    }


  function confirm() {
    console.log('USER HIT CONFIRM:');
      $http.get('/confirm-login')
      .success(function (data) {
         console.log(data);

        // console.log(contains(arr, "google", "Blofeld")); //true
  //       console.log(contains(data, "google")); //true
         if (data.hasOwnProperty('google')) {
           console.log('GOOGLE DATA');   console.log(data);
           $rootScope.userdata = data;
           $rootScope.useremail = data.google.email;   $rootScope.fullName = data.google.name;
           $rootScope.userid = data.google.id;  $rootScope.usertoken = data.google.token;

           console.log("email"+data.google.email);  console.log("token"+data.google.token);
           console.log("id"+data.google.id);

         }  else if (data.hasOwnProperty('facebook')) {
           console.log('FACEBOOK DATA');   console.log(data);
           $rootScope.userdata = data;
              $rootScope.useremail = data.facebook.email;   $rootScope.fullName = data.facebook.name;
              $rootScope.userid = data.facebook.id;  $rootScope.usertoken = data.facebook.token;

              console.log("email"+data.facebook.email);  console.log("token"+data.facebook.token);
              console.log("id"+data.facebook.id);

              //THIS WILL SHOW THE CORRECT IMAGE:
              $rootScope.imageSaved = true;

        }  else if (data.hasOwnProperty('twitter')) {
          console.log('TWITTER');   console.log(data);
          $rootScope.userdata = data;
          $rootScope.useremail = data.twitter.username;   $rootScope.fullName = data.twitter.displayName;
          $rootScope.userid = data.twitter.id;  $rootScope.usertoken = data.twitter.token;

            console.log("token"+data.twitter.token);   console.log("id"+data.twitter.id);
            console.log("name"+data.twitter.displayName);  console.log("username"+data.twitter.username);
                  }  else {
                   console.log("Not logged in yet!");
              }
                    });
      }



    var People = [
      {   name: "Joe Watkins",   position: "UX Developer", skills: "HTML CSS Javascript" },
      { name: "Jen Smithers",  position: "Dev Ops", skills: "Alien Server Technology"  },
      { name: "Paul Anderson",  position: "Designer",    skills: "UI & UX Design"  },
      {  name: "Samantha Barton",  position: "Javascript Ninja",  skills: "All things JS" }
    ];

    return People;
});
