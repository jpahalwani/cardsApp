//********FOR ROUTING**************
eCardsApp.config(['$routeProvider',function($routeProvider) {
             $routeProvider.when('/page1', {
                          templateUrl: 'public/html/Home1.html',
                           controller: 'eCardsAppCtrl'
                       }).when('/page2', {
                          templateUrl: 'public/html/Home2.html',
                           controller: 'eCardsAppCtrl2'
                       }).otherwise({
                            redirectTo: '/page1'
                            });
                  }]);
