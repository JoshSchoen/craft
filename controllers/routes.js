app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('card', {
      url: "/card",
      templateUrl: "partials/card.html",
       controller: "GetCraft"
    });
$urlRouterProvider.otherwise("/card");
});