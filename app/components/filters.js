cjs.filter('portfolioFilter', [function () {
    return function (items, selectedItem) {

        if (!angular.isUndefined(items) && !angular.isUndefined(selectedItem)) {
            var tempItems = [];
            angular.forEach(items, function (item) {
                if(!!(item.type.indexOf(selectedItem)+1)){
                    tempItems.push(item);
                };
            });
            return tempItems;
        } else {
            return items;
        }
    };
}]);