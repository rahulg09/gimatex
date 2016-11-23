angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.admin', {
    url: '/admin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/admin.html',
        controller: 'adminCtrl'
      }
    }
  })

  .state('menu.pendingOrders', {
    url: '/pendingOrders',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pendingOrders.html',
        controller: 'pendingOrdersCtrl'
      }
    }
  })

  .state('menu.agentToCustomers', {
    url: '/agentToCustomers/:agentId/:agentName',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agentToCustomers.html',
        controller: 'agentToCustomersCtrl'
      }
    }
  })

  .state('menu.customerOrderDetails', {
    url: '/customerOrderDetails/:custId/:custName/:agentId/:agentName/:productLine',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customerOrderDetails.html',
        controller: 'customerOrderDetailsCtrl'
      }
    }
  })

  .state('menu.receivableAgeing', {
    url: '/receivableAgeing',
    views: {
      'side-menu21': {
        templateUrl: 'templates/receivableAgeing.html',
        controller: 'receivableAgeingCtrl'
      }
    }
  })

  .state('menu.agentToCustomersAgeing', {
    url: '/agentToCustomersAgeing/:agentId/:agentName',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agentToCustomersAgeing.html',
        controller: 'agentToCustomersAgeingCtrl'
      }
    }
  })

  .state('menu.customerAgeingDetails', {
    url: '/customerAgeingDetails/:custId/:custName/:agentId/:agentName/:productLine',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customerAgeingDetails.html',
        controller: 'customerAgeingDetailsCtrl'
      }
    }
  })

  .state('menu.dispatches', {
    url: '/dispatches',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dispatches.html',
        controller: 'dispatchesCtrl'
      }
    }
  })

  .state('menu.agentToCustomersDispatches', {
    url: '/agentToCustomersDispatches/:agentId/:agentName',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agentToCustomersDispatches.html',
        controller: 'agentToCustomersDispatchesCtrl'
      }
    }
  })

  .state('menu.customerDispatchDetails', {
    url: '/customerDispatchDetails/:custId/:custName/:agentId/:agentName/:productLine',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customerDispatchDetails.html',
        controller: 'customerDispatchDetailsCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('menu.downloads', {
    url: '/downloads',
    views: {
      'side-menu21': {
        templateUrl: 'templates/downloads.html',
        controller: 'downloadsCtrl'
      }
    }
  })

  .state('menu.availableStock', {
    url: '/availableStock',
    views: {
      'side-menu21': {
        templateUrl: 'templates/availableStock.html',
        controller: 'availableStockCtrl'
      }
    }
  })

  .state('menu.qaSpecification', {
    url: '/qaSpecification',
    views: {
      'side-menu21': {
        templateUrl: 'templates/qaSpecification.html',
        controller: 'qaSpecificationCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});