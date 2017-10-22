angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('firstController', function($scope, $location, $http, $rootScope, $ionicModal, AuthService) {
console.log('worked');
          $scope.email = "jlatouf2@gmail.com"
          $scope.password = "jarredl"
  $scope.blue = function(){  console.log('white;');}
            /*   --------LOGIN MODAL-----------     */
        $scope.loginModal = function(){  $("#myModal").modal("show"); }

          /*   --------LOGIN FUNCTION-----------     */
        $scope.ServiceFunction5 = function () { AuthService.LoginExample3($scope.email, $scope.password); $scope.closeLogin1(); };

        $scope.ServiceFunction2 = function () { AuthService.loginExample2($scope.firstname, $scope.lastnamE); };

        /*   --------LOGOUT MODAL-----------     */
        $scope.logoutFunction = function(){  AuthService.logout(); }

        /*   --------SOCKET EX-----------     */
        $scope.socketData = function(){ socket.emit('clientEvent', 'Sent an event from the client!'); }

        var currentLocation = window.location;
        console.log(currentLocation);




        // Template for Modal
    $ionicModal.fromTemplateUrl('templates/modals/loginmodal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

    $scope.closeLogin1 = function() {
      $scope.modal1.hide();
    };

    // Open the login modal
    $scope.loginMod = function() {
      $scope.modal1.show();
    };



      })

.controller('ContactController', function($scope, $location, $http, $rootScope, AuthService) {

        $scope.fname = "Jarred"; $scope.lname = "Latouf"; $scope.email = "jlatouf2@gmail.com";
        $scope.password = "jarredl"; $scope.passwordConf = "jarredl";

        $scope.fname = {fname1 : "Jarred"};
        $scope.lname = {lname1 : "Latouf"};
        $scope.email = {email1 : "jlatouf2@gmail.comsadfasfafda"};
        $scope.password = {password1 : "jarredl"};
        $scope.passwordConf = {passwordConf1 : "jarredl"};

         // AuthService.loginExample($scope.loginForm.username, $scope.loginForm.password)

        //THESE PASS TO SERVICES.JS
        $scope.ServiceFunction2 = function () { AuthService.loginExample2($scope.firstname, $scope.lastname); };

        $scope.ServiceFunction3 = function () { AuthService.RegisterExample($scope.firstname, $scope.lastname); };

        $scope.ServiceFunction4 = function () { AuthService.RegisterExample4($scope.fname.fname1, $scope.lname.lname1, $scope.email.email1,
          $scope.password.password1, $scope.passwordConf.passwordConf1); };

       /*  $scope.ServiceFunction5 = function () {console.log("clicked22");AuthService.LoginExample3($scope.email, $scope.password);}; */


       // Open the login modal
       $scope.fbPass = function() {


         $http.get('/auth/facebook', {postal: $scope.postal }).success(function( data)
              {
                $scope.numberLinesZero = false;
                console.log("Data is returned: " + data);
                $scope.countries = data;
              }, function(posts) {});


       };

      })


.controller('ProfileCtrl', function($scope, $location, $http, $rootScope, AuthService) {


        //THIS CONFIRMS THE LOGIN FOR FACEBOOK
        setTimeout(function() {    AuthService.confirm();

          var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
          console.log("This is the data that I am goign to pass: "+ bob2);
          console.log($scope.userid);
          $scope.black2 = bob2;
        }, 1000);



          AuthService.confirm();
          console.log($scope.userid);
          console.log($rootScope.useremail);
          console.log($scope.imageSaved);

        /*
        You can use following urls to obtain different sizes of profile images. Please make sure to add Facebook id to url.
        Large size photo https://graph.facebook.com/{facebookId}/picture?type=large
        Medium size photo https://graph.facebook.com/{facebookId}/picture?type=normal
        Small size photo https://graph.facebook.com/{facebookId}/picture?type=small
        Square photo https://graph.facebook.com/{facebookId}/picture?type=square

        //  http://graph.facebook.com/" +profile.id+ "/picture?type=square
        var bob = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
        console.log("This is the data that I am goign to pass: "+ bob);


          //THIS WAS POSTED IN APP UNTIL I TOOK IT OUT
        //https://graph.facebook.com/{facebookId}/picture?type=large&w‌​idth=720&height=720
        var bob2 = "https://graph.facebook.com/" +$scope.userid+ "/picture?type=large&w‌​idth=150&height=200";
        console.log("This is the data that I am goign to pass: "+ bob2);

        $scope.black = bob;
        console.log($scope.black);
        $scope.black2 = bob2;
        console.log($scope.black2);
        */

        //https://graph.facebook.com/{facebookId}/picture?type=large&w‌​idth=720&height=720
        var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
        console.log("This is the data that I am goign to pass: "+ bob2);
        console.log($scope.userid);
        $scope.black2 = bob2;
        console.log($scope.black2);


        })




.controller('storeNamesCtrl', function($scope, $location, $http, $timeout, $rootScope, $ionicModal, AuthService) {


          /*
          AIzaSyALwS3F_V2K6Oq1q8v5-9zxUHfrvfknTEM

          $http.post('/storeName', {postal: $scope.postal }).success(function( data)
               {
           console.log("Data is returned: " + data);
           console.log("Data is returned name:: " + data[0]._id);
           console.log("Data is returned name:: " + data[0].store);

           $scope.countries = data;

              }, function(posts) {});

              1) When you add store / line / name  : add Admintoken to DB
            ) when you go to delete them you have to check if you are admin.

            storeName
            storenameSearch
            addStore
            deleteselectedStore
            deleteStore44
          */





          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/storemodal1.html', {
          	scope: $scope
          }).then(function(modal) {
          	$scope.modal2 = modal;
          });

          $scope.closestoremodal1 = function() {
          	$scope.modal2.hide();
          };

          // Open the login modal
          $scope.openstoremodal1 = function() {
          	$scope.modal2.show();
          };



          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/storemodal2.html', {
          	scope: $scope
          }).then(function(modal) {
          	$scope.modal3 = modal;
          });

          $scope.closestoremodal2 = function() {
          	$scope.modal3.hide();
          };

          // Open the login modal
          $scope.openstoremodal2 = function() {
          	$scope.modal3.show();
          };


          $timeout(function(){
          $scope.modal2.show();
          },0)







          /*   --------STARTPAGE FUNCTION-----------     */
                startPage();

          function startPage () {
              $scope.numberLinesZero = true;
              getCoordinates();
        //      $("#optionsModal").modal("show");
              $rootScope.Coordinates = "Please wait a moment for coordinates!";
          };

          /*   --------NAVIGATION CHECK-----------     */
          function getCoordinates () {
            if(navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(geo_success, geo_error);
            } else {
              printAddress(geoip_latitude(), geoip_longitude(), true);
            }
          };

          /*   --------GETS COORDINATES BUTTON-----------     */
          function getCoordinatesButton () {
            getCoordinates()
          };


          $http.post('/storeName', {postal: $scope.postal }).success(function( data)
               {
                 $scope.numberLinesZero = false;
                 console.log("Data is returned: " + data);
                 $scope.countries = data;
               }, function(posts) {});
//http://localhost:5000
/*
$http.post('storeName', {postal: $scope.postal }).success(function( data)
     {
       $scope.numberLinesZero = false;
       console.log("Data is returned: " + data);
       $scope.countries = data;
     }, function(posts) {});


               var url = "http://localhost:8100/storeName";
               $http({
                   method: 'JSONP',
                   url: url,
                   postal: $scope.postal
               }).
               success(function(status) {
                   //your code when success
               }).
               error(function(status) {
                   //your code when fails
               });

               var request = {postal: $scope.postal};
                   console.log(request);
                   $.ajax({
                       type: "POST",
                       url: this.wsUrl + "/storeName",
                       contentType: "text/plain",
                       data: JSON.stringify(request),

                       crossDomain: true,
                   });


*/






          /*   --------GETS STORES-----------     */
          function getStoreNamesAfterCoordinates () {
            $http.post('/storeName', {postal: $scope.postal }).success(function( data)
                 {
                   $scope.numberLinesZero = false;
                   console.log("Data is returned: " + data);
                   $scope.countries = data;
                 }, function(posts) {});

            };

            /*   --------SEARCHES STORES-----------     */
          $scope.searchStores = function(){
            $http.post('/storenameSearch', {store: $scope.storesearchName }).success(function( data)
                 {
             console.log("Data is returned: " + data);
             $scope.countries = data;
                }, function(posts) {});
            }


            /*   --------OPTIONS MODAL-----------     */
            $scope.optionsModal = function(){
                $("#optionsModal").modal("show");
              }

              $scope.toggleModel = {
                 value1 : true,
                 value2 : false,
                 value3 : false
              };

              $scope.storeName = {sname : "white"};

              $scope.fname = {fname1 : "Jarred"};
              $scope.lname = {lname1 : "Latouf"};

              /*   --------ADDS STORE TO DB-----------     */
            $scope.addStore1 = function(name){
            //  $scope.usertoken = 1;

            console.log('storeName: '+ $scope.storeName.sname);
              console.log($scope.postal); console.log($scope.storeName);
              console.log($scope.latitude); console.log($scope.longitude);
              console.log("UserToken: "+ $scope.usertoken );

              if ( $scope.storeName.sname == undefined) {
                console.log('Please enter a name');
                  } else{
                    $http.post('/addStore', {store : $scope.storeName.sname, postal: $scope.postal, latitude: $scope.latitude,
                      longitude: $scope.longitude, Adminpassword: $scope.usertoken }).success(function( data)
                   {
                     console.log("Data is returned: " + data);
                        $rootScope.successful = true;
                        console.log($scope.successful);
                  $scope.countries.push(data)
                $scope.storeName.sname = '';
                setTimeout(function(){ stopSuccessBar(); }, 3000);

                 }, function(posts) {});
               }

              }


              /*   --------TIMEOUT FCN-----------     */
              function stopSuccessBar () {
                setTimeout(function() {   $(".alert").alert('close');   }, 2000);
                $rootScope.successful = false;
                console.log($scope.successful);

              };


              /*   --------LOCATION TRACKING FCNS-----------     */

            /*
           //     $(document).ready(function () {

                // wire up button click
          //      $('#go').click(function () {
                  // test for presence of geolocation
                  if(navigator && navigator.geolocation) {
                    // make the request for the user's position
                    navigator.geolocation.getCurrentPosition(geo_success, geo_error);
                  } else {
                    // use MaxMind IP to location API fallback
                    printAddress(geoip_latitude(), geoip_longitude(), true);
                  }
          //      });
        //      });
            */

            function geo_success(position) {
              $rootScope.Coordinates = "";
            //  $scope.numberLinesZero = false;

              printAddress(position.coords.latitude, position.coords.longitude);
              $rootScope.latitude = position.coords.latitude;
              $rootScope.longitude = position.coords.longitude;
              getStoreNamesAfterCoordinates()
               console.log($scope.latitude); console.log($scope.longitude);
            }


            function geo_error(err) {
              $rootScope.Coordinates = "Coordinates not working!";
              getStoreNamesAfterCoordinates();
            console.log('DID NOT WORK!');
            }

              function printAddress(latitude, longitude, isMaxMind) {
                  var geocoder = new google.maps.Geocoder();
                  var yourLocation = new google.maps.LatLng(latitude, longitude);

                  geocoder.geocode({ 'latLng': yourLocation }, function (results, status) {
                  if(status == google.maps.GeocoderStatus.OK) {
                    if(results[0]) {
                      $('#results').fadeOut(function() {
                        $(this).html('<p><b> This is postal code:</b></p><p><em>' + results[0].address_components[6].long_name + '</em></p>'
                                      + $scope.latitude +'</em></p>'+ $scope.longitude).fadeIn();

                            console.log('This is the correct postal code' + results[2].address_components[0].long_name);
                           $rootScope.postal = results[0].address_components[6].long_name;

                           getStoreNamesAfterCoordinates();

                      })
                    } else { error('Google did not return any results.'); }
                  } else {  error("Reverse Geocoding failed due to: " + status); }
                });

                // if we used MaxMind for location, add attribution link
                if(isMaxMind) {
                  $('body').append('<p><a href="http://www.maxmind.com" target="_blank">IP to Location Service Provided by MaxMind</a></p>');
                }
              }

              function error(msg) {   alert(msg);   }


              /*   --------LOCATION DATA ON PAGE-----------     */

            /*
            var x = document.getElementById("demo");

            x.innerHTML = "Geolocaiton data will not be recorded if Store Added";

            $scope.getLocation = function() {
                if (  navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition);
                } else {   x.innerHTML = "Geolocation is not supported by this browser.";   }
            }


            function showPosition(position) {
                x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude  ;

                console.log(position.coords.latitude);   console.log(position.coords.longitude);
                console.log(position);

            }

            */

            /*   --------DELETENAME-----------     */

            $scope.deleteName = function(name) {
                console.log("name is: "+name);
                $scope.storeName2 = name;
                console.log($scope.storeName2);
              $http.post('/deleteselectedStore', {store : $scope.storeName2 }).success(function( data)
               {
                 console.log("Data is returned: " + data);
                  $scope.countries = data;

             }, function(posts) {});

          };

          //TO FIX THE DELETE FROM RETURNING THE NAMES OF STORES WITH POSTAL CODES ON SUCCESS:
          //ALL I HAVE TO DO IS MAKE IT PASS THE POSTAL CODE AS WELL WHICH WOULD BE ZERO
          //WHICH ALLOWS IT TO PASS BACK ONLY STORES WITH NO POSTAL CODES.
          $scope.deleteName2 = function(name) {
              console.log("name is: "+name);
              $scope.storeName2 = name;
              console.log($scope.storeName2);

              $http.post('/deleteStore44', {store : name, Adminpassword: $scope.usertoken }).success(function( data)
                 {
                   console.log(data);
                   $scope.countries = data;

               }, function(posts) {});

        };


          /*   --------DELETE MODE TOGGLE-----------     */
          $scope.deleteMode = function(){   $rootScope.deleteButton = true;   }

            /* ----------EXIT DELETE MODE -------------- */

           $scope.exitDeleteMode = function(){    $rootScope.deleteButton = false;  }


             /*   --------LOCATION DATA ON PAGE-----------     */

            //Grabs Storename to pass to next page
        	$scope.grabStuff = function(names){
              $rootScope.grabStorename = names;
              console.log('GrabStuff');
              /*    THIS IS NOT ON B/C IT WILL DELETE THE LINE NOW THAT THE BACKEND CHANGED.
              $http.post('/checkStoreAdmin', {store : $scope.grabStorename, Adminpassword: $scope.usertoken }).success(function( data)
                 {
                   console.log("Data is returned: " + data);
               }, function(posts) {});
               */
        		};

            $scope.playlists = [
              { title: 'Reggae', id: 1 },
              { title: 'Chill', id: 2 },
              { title: 'Dubstep', id: 3 },
              { title: 'Indie', id: 4 },
              { title: 'Rap', id: 5 },
              { title: 'Cowbell', id: 6 }
            ];


    })


.controller('StorelinesCtrl', function($scope, $location, $ionicModal, $cordovaGeolocation, $http, $rootScope, AuthService) {
  /*
  //  var y = document.getElementById("demo2");

    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 7000 });

    var watch;
    var watchOptions = {
      timeout : 5000,
      maximumAge: 3000,
      enableHighAccuracy: true // may cause errors if true
    };


    var watchCurrentLocation = function() {
      watch = $cordovaGeolocation.watchPosition(watchOptions);
      watch.then(
        null,
        function(err) {
          // error
          console.log("watch error", err);
        },
        function(position) {
          var lat  = position.coords.latitude
          var long = position.coords.longitude

          console.log('lat long', lat, long);
          $scope.lastLocation.lat = $scope.currentLocation.lat;
          $scope.lastLocation.long = $scope.currentLocation.long;

          $scope.currentLocation.lat = lat;
          $scope.currentLocation.long = long;
      });
    };



  setInterval(function() {
        // Do something every 3 seconds
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
           $cordovaGeolocation.getCurrentPosition(posOptions)

           .then(function (position) {
              var lat  = position.coords.latitude
              var long = position.coords.longitude
              console.log(lat + '   ' + long)
           }, function(err) {
              console.log(err)
           });

  }, 3000);
  */



  // Template for Storenames Modal
  $ionicModal.fromTemplateUrl('templates/modals/linemodal1.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal4 = modal;
  });

  $scope.closelinemodal1 = function() {
    $scope.modal4.hide();
  };

  // Open the login modal
  $scope.openlinemodal1 = function() {
    $scope.modal4.show();
  };



  // Template for Storenames Modal
  $ionicModal.fromTemplateUrl('templates/modals/linemodal2.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal5 = modal;
  });

  $scope.closelinemodal2 = function() {
    $scope.modal5.hide();
  };

  // Open the login modal
  $scope.openlinemodal2 = function() {
    $scope.modal5.show();
  };



  setInterval(function() {
        // Do something every 3 seconds
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
           $cordovaGeolocation.getCurrentPosition(posOptions)

           .then(function (position) {
              var lat  = position.coords.latitude
              var long = position.coords.longitude
              $scope.latitude = lat;
              $scope.longitude = long;

              console.log(lat + '   ' + long)
           }, function(err) {
              console.log(err)
           });

  }, 3000);


  console.log($scope.grabStorename);

  /*   --------GET A STORE TYPE WITH LINE IN IT-----------     */

  $http.post('/numberofLines', {store: $scope.grabStorename}).success(function( data)
   {  console.log("Data isreturned: " + data);  console.log(data.length);
    $rootScope.numberLines= data.length; $scope.countries = data;

     //THIS WILL ALLOW THE TABLE TO BE EMPTY
     if ($scope.numberLines == 0) {
       $rootScope.numberLinesZero = true; console.log('data length is 0');
     } else if($scope.numberLines > 0) {
       $rootScope.numberLinesZero = false;
     }
   }, function(posts) {});



   /*   --------OPTIONS MODAL-----------     */
   $scope.optionsModal2 = function(){   $("#optionsModal2").modal("show");  }

   /*   --------DELETE MODE-----------     */
   $scope.deleteMode = function(){     $rootScope.deleteButton = true; $scope.closelinemodal1();    }


   /* ----------EXIT DELETE MODE -------------- */
    $scope.exitDeleteMode = function(){     $rootScope.deleteButton = false;    }


  /*   --------LINE MODAL-----------     */
   $scope.addLineMOdal = function(){     $("#myLineModal").modal("show");   }

   /*   --------LINE NUMBERS-----------     */

      $scope.One = function(){     $rootScope.addNumberDB = 1;  $scope.addLine1(); $scope.closelinemodal2();  };

      $scope.Two = function(){    $rootScope.addNumberDB = 2;   $scope.addLine1(); $scope.closelinemodal2();   };

      $scope.Three = function(){   $rootScope.addNumberDB = 3;   $scope.addLine1(); $scope.closelinemodal2();   };

      $scope.Four = function(){    $rootScope.addNumberDB = 4;    $scope.addLine1(); $scope.closelinemodal2();  };

      $scope.Five = function(){     $rootScope.addNumberDB = 5;   $scope.addLine1(); $scope.closelinemodal2();   };


          /*   --------LINE FCN-----------     */

     $scope.addLine1 = function(){
       $rootScope.numberLinesZero = false;
          console.log("Number chosen: " + $scope.addNumberDB);
          console.log("Token: " + $scope.usertoken);

           if ( $scope.grabStorename == undefined) {
             console.log('Please get store name!');
               } else{
                 $http.post('/addLine1', {store : $scope.grabStorename, line: $scope.addNumberDB, Adminpassword: $scope.usertoken })
                 .success(function( data)
                {
                  console.log(data);
                    //    THIS ADD SUCCESS BAR:
                    $rootScope.successful = true;
                    $scope.countries.push(data)
                  setTimeout(function(){ stopSuccessBar(); }, 3000);

              }, function(posts) {});
            }
       }

       /*   --------TIMEOUT-----------     */
       function stopSuccessBar () { setTimeout(function() {  $(".alert").alert('close');  }, 2000);
         $rootScope.successful = false;
       };


       /*   --------DELETE MODE-----------     */
        $scope.deleteLine = function(name) {
          console.log("line is: "+name);
          console.log("store name: "+ $scope.grabStorename);
      //    $http.post('/deleteselectedLine', {line : name }).success(function( data)
          $http.post('/deleteselectedLine', {line : name, store: $scope.grabStorename}).success(function( data)

         {
           console.log(data);    $scope.countries = data;
           }, function(posts) {});
        };



        /*   --------GRABS LINE NAME & CHECKS ADMIN-----------     */
  	$scope.checkLineAdminFcn = function(names){
      $rootScope.grabLineNumber = names;
      console.log (" LINE NUMBER: " + $scope.grabLineNumber);
        $http.post('/checkLineAdmin', {store : $scope.grabStorename, line: $scope.grabLineNumber,
          Adminpassword: $scope.usertoken }).success(function( data)
           {
             console.log("Data is returned: " + data);
         }, function(posts) {});
  		};


          })


.controller('PeoplelineCtrl', function($scope, $location, $http, $ionicModal, $rootScope, AuthService) {

      /*   ALL YOU HAVE TO DO IS PUT YOUR COORDINATES INTO GET STORE COORD.
              THEN YOU PUT THE DISTANCE EQUASTION INTO THERE AND IT WORKS WHEN PAGE
              GOES ON


              $rootScope.numberLines= data.length; $scope.countries = data;

               //THIS WILL ALLOW THE TABLE TO BE EMPTY
               if ($scope.numberLines == 0) {
                 $rootScope.numberLinesZero = true; console.log('data length is 0');
               } else if($scope.numberLines > 0) {
                 $rootScope.numberLinesZero = false;
               }
        */


          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/peoplemodal1.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal6 = modal;
          });

          $scope.closepeoplemodal1 = function() {
            $scope.modal6.hide();
          };

          // Open the login modal
          $scope.openpeoplemodal1 = function() {
            $scope.modal6.show();
          };


          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/peoplemodal2.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal7 = modal;
          });

          $scope.closepeoplemodal2 = function() {
            $scope.modal7.hide();
          };

          // Open the login modal
          $scope.openpeoplemodal2 = function() {
            $scope.modal7.show();
          };


        /* ----------GET PEOPLE FROM PEOPLELINE DATABASE -------------- */
        $http.post('/getPeopleLine', {store : $scope.grabStorename, line: $scope.grabLineNumber,
          Adminpassword: $scope.usertoken }).success(function( data)
     //   $http.post('/getPeoplefromDB').success(function(data)
           {
               console.log("Data is returned: " + data);
             $scope.people = data;

           }, function(posts) {});


           /* ----------GET LINE COORD / FINALCALC IN SHOWPOSITION2-------------- */

           $http.post('/getLineCoordinates', {store : $scope.grabStorename}).success(function( data)
              {

                  console.log(data);  $scope.places = data;
              //  console.log("Data is returned: " + data[0].latitude + data[0].longitude);
                 $rootScope.storelatitude = data[0].latitude;
                 $rootScope.storelongitude = data[0].longitude;
                 //ONLY GETS LINE COORDINATES IF DATA IS REQUIRED:

                if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition(showPosition2);
                } else {
                  $scope.location = "Geolocation is not supported by this browser.";
                }
              }, function(posts) {});


        /* ----------GETS STORE COORDINATES: -------------- */

        $scope.getStoreCords = function() {
          $http.post('/getLineCoordinates', {store : $scope.grabStorename}).success(function( data)
             {
                 console.log(data);
               $scope.places = data;
               console.log("Data is returned: " + data[0].latitude + data[0].longitude);
                $rootScope.storelatitude = data[0].latitude;
                $rootScope.storelongitude = data[0].longitude;

             }, function(posts) {});
        };

        /* ----------EXAMPLE DISTANCE CALC: -------------- */
        $scope.distanceCalc = function() {
          var a = 25 - 10
          var b = 5 - 100
          var c = Math.sqrt( a*a + b*b );
          console.log('This is distance calc: '+c);

          var distance2 = distance(25, 10, 5, 100, 'K');
          console.log("dis: "+ distance2);
        };


        /* ----------DISTANCE BETWEEN 2 SETS OF COORDINATES -------------- */
        $scope.distanceCalc2 = function() {
        //  var newPoint33 = distance($scope.storelatitude, $scope.storelongitude,
        //    $rootScope.latitude22, $rootScope.longitude22, 'K');
        //  console.log(newPoint33);
          //  $scope.finalCalc = newPoint33;

        };


        /* ----------DISTANCE FORMULA -------------- */


        function distance(lat1, lon1, lat2, lon2, unit) {
                var radlat1 = Math.PI * lat1/180
                var radlat2 = Math.PI * lat2/180
                var radlon1 = Math.PI * lon1/180
                var radlon2 = Math.PI * lon2/180
                var theta = lon1-lon2
                var radtheta = Math.PI * theta/180
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                dist = Math.acos(dist)
                dist = dist * 180/Math.PI
                dist = dist * 60 * 1.1515
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return dist
        }





            /* ----------GET PICTURE FOR EACH PERSON -------------- */
        setTimeout(function() {    AuthService.confirm();

          var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
          console.log("This is the data that I am goign to pass: "+ bob2);
          console.log($scope.userid);
          $scope.black2 = bob2;
        }, 1000);


            /* ----------LOCATION FUNCTION -------------- */

          //   var x = document.getElementById("demo");
               var y = document.getElementById("demo2");

          //  x.innerHTML = "Geoloca iton data will not be recorded if Store Added";
              y.innerHTML = "Geolocaiton data will not be recorded if Store Added";

              $scope.getLocation = function() {
                  if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition);
                  } else {   x.innerHTML = "Geolocation is not supported by this browser."; }
              }

              function showPosition(position) {
                  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude  ;
                  console.log(position.coords.latitude);   console.log(position.coords.longitude);
              }


              /* ----------LOCATION FUNCTION 2 -------------- */

              $scope.positionInfo = "Please check location data!"

              $scope.location = function(){
                if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition2);
                } else {  $scope.location = "Geolocation is not supported by this browser.";
                }
              };

              function showPosition2(position) {
                if (position != 0) {
                $rootScope.latitude = position.coords.latitude; $rootScope.longitude = position.coords.longitude; }
              //  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude ;
                y.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude ;
                $rootScope.latitude22 =  position.coords.latitude
                $rootScope.longitude22 = position.coords.longitude

                var newPoint33 = distance($scope.storelatitude, $scope.storelongitude,
                  $rootScope.latitude22, $rootScope.longitude22, 'K');
                console.log(newPoint33);

                $scope.showfinalCalc = true;

                  $rootScope.finalCalc = newPoint33;

              }


            //  setTimeout(function() {   $scope.finalCalc =$rootScope.finalCalc ;  }, 7000);

              if ($scope.showfinalCalc == true) {
                $scope.finalCalc =$rootScope.finalCalc ;
              }
          //    setTimeout(function(){ $rootScope.finalCalc = newPoint33; }, 3000);


              /* ----------ADDPEOPLE FUNCTION 2 -------------- */

             $scope.addPeopletoDB = function(){
               console.log("finalCalc: "+ $scope.finalCalc);

               $http.post('/peoplelineInfo', {store : $scope.grabStorename, line: $scope.grabLineNumber,
                 email: $scope.useremail, fullname: $scope.fullName,  longitude: $scope.longitude,
                 latitude: $scope.latitude, distance: $scope.finalCalc,
                 Adminpassword: $scope.usertoken }).success(function( data)
                  {
                      console.log("Data is returned: " + data);
                      console.log("Data is returned name:: " + data.email);
                  $scope.people.push(data)
                  }, function(posts) {});
               }


             /* ----------DELETE MODE -------------- */

            $scope.deleteMode = function(){  $rootScope.deleteButton = true;   }

             $scope.exitDeleteMode = function(){ $rootScope.deleteButton = false; }


              /* ----------OPTIONS MODAL -------------- */

             $scope.optionsModa22 = function(){ $("#optionsModa22").modal("show"); }

               /* ----------ADDYOURSELF MODAL -------------- */

               $scope.AddYourselfModal= function(){ $("#AddYourselfModal").modal("show"); }


               /* ----------POSITION BUTTON! -------------- */

               $scope.positionButton = function(){ $rootScope.numberLinesZero = false; }


               /* ----------DISPLACEMENT BUTTON! -------------- */

               $scope.displacementButton = function(){ $rootScope.numberLinesZero = true; }


              /* ----------DELETE PEOPLE FUNCITON -------------- */

              $scope.deletePeople2 = function(email) {
                console.log("Email: " + email);
                $http.post('/deletePeopleLine44', {email : email, store : $scope.grabStorename, line: $scope.grabLineNumber }).success(function( data)
               {  console.log(data);

                $scope.countries = data;
            //    $scope.people.push(data)

                 }, function(posts) {});
              };

            //Grabs Storename to pass to next page
            $scope.checkPeopleFcn = function(names){
                $rootScope.grabPersonName = names;
                console.log ("Name of Store variable: " + $scope.grabLineNumber);
                console.log ("Name of Person in line: " + $scope.grabPersonName);
                  $http.post('/checkPeopleAdmin', {store : $scope.grabStorename,
                line: $scope.grabLineNumber, Adminpassword: $scope.usertoken })
                .success(function( data)
                 {
                   console.log("Data is returned: " + data);
               }, function(posts) {});
            };

    });
