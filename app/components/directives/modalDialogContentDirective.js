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
            var bodyTag = angular.element( document.querySelector('body') );
            bodyTag.addClass('dng-disable-scroll');

            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
                bodyTag.removeClass('dng-disable-scroll');
            };
            // element.bind('load', function() {
            //     scope.$apply();
            // });

        },
        templateUrl: 'app/components/directives/modalDialogContentView.html'
    };
});