var app = angular.module('craftApp', ['ui.bootstrap', 'ui.router'])

app.controller('GetCraft', function($http, $scope, craftData) {
  craftData.success(function(data) {
       $scope.craft = data;
       console.log($scope.craft);
       $scope.defaults = {
            default_image: "default.png",
            content_text: "Custom Text here",
            content_image: "Pick an image from your gallery above."
        };

  $scope.status = {
    isopen1: false,
    isopen2: false
   };

  var gFont = 'Arvo|Anton|Shadows+Into+Light|Merriweather|Open+Sans|Pacifico|Archivo+Black';

  $scope.apiUrl = [];
  $scope.apiUrl = gFont.replace(/\+/g, " ").split(/\|/);

  $scope.fontsSizes = [8, 9, 10, 11, 12, 14, 16, 24, 28, 32, 36, 48];
  }).
  error(function(data, status, headers, config) {
    console.log( 'error' + status + data + status + headers, config);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  $scope.showBack = {
    back: false,
    text: "Show Back"
  };

$scope.toggleBack = function() {
  if ($scope.showBack.text === "Show Front") {
    $scope.showBack.text = "Show Back";
    $scope.showBack.back = !$scope.showBack.back;
  }
  else {
  $scope.showBack.text = "Show Front";
  $scope.showBack.back = true;
  }
}

  $scope.addPhoto = function(index) {
    $scope.eventSelected = index;
    $scope.selectedImage = index.content_image;
  }

  $scope.addText = function() {
    $scope.defaults.content_text = " ";
  }

  $scope.changeColor = function(color) {
    $scope.bgColor = color;
  }

  $scope.changeFontSize = function(size) {
    $scope.newFontSize = size;
  }

  $scope.fontStyleChange = function(fontStyle) {
    $scope.newFontStyle = fontStyle;
  }
});