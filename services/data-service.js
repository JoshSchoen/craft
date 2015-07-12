app.factory("craftData", function($http) {
    return $http.get('./php/craft_data.php?action=get_craft')

});

