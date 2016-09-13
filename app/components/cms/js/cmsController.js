/**
 * Created by devds on 13.09.16.
 */
cjs.controller('cmsController',['$scope', function ($scope) {
    $scope.mainTest = 'Hello world';
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
        dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });


}]);