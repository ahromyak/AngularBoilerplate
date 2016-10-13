cjs.filter('portfolioFilter', [function () {
    return function (items, selectedItem) {

        if (!angular.isUndefined(items) && !angular.isUndefined(selectedItem)) {
            var filteredItems = [];
            angular.forEach(items, function (item) {
                if(!!(item.type.indexOf(selectedItem)+1)){
                    filteredItems.push(item);
                };
            });
            return filteredItems;
        } else {
            return items;
        }
    };
}]);