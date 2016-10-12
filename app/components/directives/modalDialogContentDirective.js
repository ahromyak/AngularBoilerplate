cjs.directive('modalDialogContent', function () {
    return {
        restrict: 'E',
        scope: {
            itemData: '=',
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        controller: function($scope){


        },
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
            };
            element.bind('load', function() {
                scope.$apply();
                console.log('ok');
            });

        },
        templateUrl: 'app/components/directives/modalDialogContentView.html'
    };
});