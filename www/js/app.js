// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova', 'angularjs-dropdown-multiselect'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    window.plugins.sqlDB.copy("Gimatex.db", 1, function() {
        db = $cordovaSQLite.openDB({name: "Gimatex.db", iosDatabaseLocation: 'Library'});
    }, function(error) {
       // console.error("There was an error copying the database: " + error);
        db = $cordovaSQLite.openDB({name: "Gimatex.db", iosDatabaseLocation: 'Library'});
    });
  });
})