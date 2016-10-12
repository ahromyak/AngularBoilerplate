cjs.controller('homeController', function ($scope, $sce) {

    $scope.contentVisible = true;
    $scope.toggleInput = false;
    $scope.move = function () {
        angular.element(document.querySelector('#toggle')).hide();
        $scope.toggleInput = !$scope.toggleInput;
    };
    $scope.portfolio = [
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'pic-2',
            'link': 'feedmusic.com'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'pic-2',
            'link': 'http://www.mikiyakobayashi.com/'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'pic-2',
            'link': 'http://www.mikiyakobayashi.com/'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'pic-2',
            'link': 'http://education.iceandsky.com/'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'pic-2',
            'link': 'http://www.world-of-swiss.com/en'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'pic-2',
            'link': 'http://www.latimes.com/'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'pic-2',
            'link': 'http://minimums.com/'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'pic-2',
            'link': 'http://www.guillaumetomasi.com/'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'pic-2',
            'link': 'http://www.kennedyandoswald.com/'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'pic-2',
            'link': 'https://www.bigcartel.com/'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'pic-2',
            'link': 'http://wovenmagazine.com/'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'pic-2',
            'link': 'http://www.johos.at/#/en/0/0'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'pic-2',
            'link': 'http://www.awwwards.com/'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'pic-2',
            'link': 'http://www.theuselessweb.com/'
        }
    ];


    $scope.modalShown = false;
    $scope.toggleModal = function (itemData) {
        $scope.itemData = itemData;
        $scope.modalShown = !$scope.modalShown;
    };


});