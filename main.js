/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

cjs.controller('mainController', function ($scope, $sce) {
    $scope.contentVisible = true;
    $scope.toggleInput = false;
    $scope.modalShown = false;
    $scope.unemptyMenu = false;


    $scope.move = function () {
        angular.element(document.querySelector('#toggle')).hide();
        $scope.toggleInput = true;
    };

    // Toggle modal window
    $scope.toggleModal = function (itemData) {
        $scope.itemData = itemData;
        $scope.modalShown = !$scope.modalShown;
    };

    // Pass selected value to portfolioFilter
    $scope.setSelectedItem = function (val) {
        $scope.selectedItem = val;
        $scope.toggleInput = false;
        angular.element(document.querySelector('#toggle')).show();
    };

    // Portfolio items listed
    $scope.portfolio = [
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'booking-service.com',
            'link': $sce.trustAsResourceUrl('https://booking-service.com/'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'education.iceandsky.com',
            'link': $sce.trustAsResourceUrl('http://education.iceandsky.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'world-of-swiss.com/en',
            'link': $sce.trustAsResourceUrl('http://www.world-of-swiss.com/en'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'

        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'latimes.com',
            'link': $sce.trustAsResourceUrl('http://www.latimes.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'minimums.com',
            'link': $sce.trustAsResourceUrl('http://minimums.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'guillaumetomasi.com',
            'link': $sce.trustAsResourceUrl('http://www.guillaumetomasi.com/'),
            'type': [8],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'kennedyandoswald.com',
            'link': $sce.trustAsResourceUrl('http://www.kennedyandoswald.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'bigcartel.com',
            'link': $sce.trustAsResourceUrl('https://www.bigcartel.com/'),
            'type': [10],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'wovenmagazine.com',
            'link': $sce.trustAsResourceUrl('http://wovenmagazine.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'johos.at',
            'link': $sce.trustAsResourceUrl('http://www.johos.at/#/en/0/0'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'awwwards.com',
            'link': $sce.trustAsResourceUrl('http://www.awwwards.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'booking-service.com',
            'link': $sce.trustAsResourceUrl('https://booking-service.com/'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'education.iceandsky.com',
            'link': $sce.trustAsResourceUrl('http://education.iceandsky.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'world-of-swiss.com/en',
            'link': $sce.trustAsResourceUrl('http://www.world-of-swiss.com/en'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'

        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'latimes.com',
            'link': $sce.trustAsResourceUrl('http://www.latimes.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'minimums.com',
            'link': $sce.trustAsResourceUrl('http://minimums.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'guillaumetomasi.com',
            'link': $sce.trustAsResourceUrl('http://www.guillaumetomasi.com/'),
            'type': [8],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'kennedyandoswald.com',
            'link': $sce.trustAsResourceUrl('http://www.kennedyandoswald.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'bigcartel.com',
            'link': $sce.trustAsResourceUrl('https://www.bigcartel.com/'),
            'type': [10],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'wovenmagazine.com',
            'link': $sce.trustAsResourceUrl('http://wovenmagazine.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'johos.at',
            'link': $sce.trustAsResourceUrl('http://www.johos.at/#/en/0/0'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'awwwards.com',
            'link': $sce.trustAsResourceUrl('http://www.awwwards.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'booking-service.com',
            'link': $sce.trustAsResourceUrl('https://booking-service.com/'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'mikiyakobayashi.com',
            'link': $sce.trustAsResourceUrl('http://www.mikiyakobayashi.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'education.iceandsky.com',
            'link': $sce.trustAsResourceUrl('http://education.iceandsky.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'world-of-swiss.com/en',
            'link': $sce.trustAsResourceUrl('http://www.world-of-swiss.com/en'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'

        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'latimes.com',
            'link': $sce.trustAsResourceUrl('http://www.latimes.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'minimums.com',
            'link': $sce.trustAsResourceUrl('http://minimums.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'guillaumetomasi.com',
            'link': $sce.trustAsResourceUrl('http://www.guillaumetomasi.com/'),
            'type': [8],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'kennedyandoswald.com',
            'link': $sce.trustAsResourceUrl('http://www.kennedyandoswald.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'bigcartel.com',
            'link': $sce.trustAsResourceUrl('https://www.bigcartel.com/'),
            'type': [10],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'wovenmagazine.com',
            'link': $sce.trustAsResourceUrl('http://wovenmagazine.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'johos.at',
            'link': $sce.trustAsResourceUrl('http://www.johos.at/#/en/0/0'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'awwwards.com',
            'link': $sce.trustAsResourceUrl('http://www.awwwards.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'theuselessweb.com',
            'link': $sce.trustAsResourceUrl('http://www.theuselessweb.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        }
    ];
});

