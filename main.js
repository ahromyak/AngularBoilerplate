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
            'name': 'volvocarsdesign.nl',
            'link': $sce.trustAsResourceUrl('http://volvocarsdesign.nl'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Redesign, animation, optimization, multilingual',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'poletehnika.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://poletehnika.dengo-systems.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'project from scratch. Design is not ours',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'pfomg.dengo-systems.com/',
            'link': $sce.trustAsResourceUrl('http://pfomg.dengo-systems.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Info-site, two pages',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'education.iceandsky.com',
            'link': $sce.trustAsResourceUrl('http://pfomg.dengo-systems.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'rent30a.com',
            'link': $sce.trustAsResourceUrl('rent30a.com'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'real estate booking service',
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
            'name': 'trendemon.com',
            'link': $sce.trustAsResourceUrl('http://trendemon.com'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Development of work modules with Facebook (sending posts, reading posts, monitoring of profiles, getting lists of friends, News Feed, getting list of likes), code refactoring, code optimization',
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
            'name': 'fashionfromaroundtheworld.com',
            'link': $sce.trustAsResourceUrl('http://fashionfromaroundtheworld.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'replicate a similar website with a similar meme/photo generator from this website http://www.straightouttasomewhere.com/?skip=1 Ignore the photos in the background. I just want a site with exactly the same meme generator except for the text which I will specify. I also want the final image to retain a very high quality after the text has been added. The most important functionalities in the meme generator are 1. Add Photo, 2.Download, 3.share, 4.Start over 5. Essentially after a photo is uploaded, the Meme generator should product a high quality photo with words on the photo which can be downloaded & shared via social media - so adding a share this icon will work perfectly.',
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
            'name': 'privatearrangements.co.nz',
            'link': $sce.trustAsResourceUrl('http://privatearrangements.co.nz/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Arrangement web-site for people 45+.From scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'surveyapp.schoolclimate.org',
            'link': $sce.trustAsResourceUrl('http://surveyapp.schoolclimate.org/#!/en/create'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'To create a Survey engine application, that is easily manageable and accessible to our users and can scale from a business standpoint.',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'trendy-workshop.com',
            'link': $sce.trustAsResourceUrl('http://www.trendy-workshop.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Project from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'birdhive.com',
            'link': $sce.trustAsResourceUrl('http://birdhive.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Development of additional plugins for management system of the site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'alphavr.com',
            'link': $sce.trustAsResourceUrl('http://alphavr.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Creation of 360 degrees panoramas',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'gps-taalenrekenen.nl',
            'link': $sce.trustAsResourceUrl('http://gps-taalenrekenen.nl/'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'frozenfire.co.uk',
            'link': $sce.trustAsResourceUrl('http://www.frozenfire.co.uk/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'bug fix',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'reupp.com',
            'link': $sce.trustAsResourceUrl(' http://reupp.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'bug fixes',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'nyhamn.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://nyhamn.dengo-systems.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Lorem ipsum dsfdf sdfsd sdfsdfsdfg sdfgasdfg sdfgsdfg dfgdsfg sdfgsdfg sdfgsdfg sdfgsdfg',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'nyhamn1.voby.se',
            'link': $sce.trustAsResourceUrl('http://nyhamn1.voby.se/'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'

        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'childcare.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://childcare.dengo-systems.com/'),
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
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': '3mix.se',
            'link': $sce.trustAsResourceUrl('http://3mix.se/'),
            'type': [8],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'bitnation.co',
            'link': $sce.trustAsResourceUrl('https://bitnation.co/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'chunkychicken.com',
            'link': $sce.trustAsResourceUrl('http://www.chunkychicken.com/'),
            'type': [10],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Made the existing web-site to be responsive',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'dashboard.fiskl.com',
            'link': $sce.trustAsResourceUrl('https://dashboard.fiskl.com/login'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'adding a few final features (for example creating financial reports) and fixing issues/debugging (responsiveness issue and other widget bugs). The tasks are tracked via Confluence and Jira.',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'increatie.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://increatie.dengo-systems.com/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'v-tip.com',
            'link': $sce.trustAsResourceUrl('http://v-tip.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Video service, work with different API',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'hotel-assist.com',
            'link': $sce.trustAsResourceUrl('http://www.hotel-assist.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': ' work with API, showing data on the map, work with Google Maps',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'brabantia.com',
            'link': $sce.trustAsResourceUrl('http://www.brabantia.com/uk/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-2.jpg',
            'name': 'marketing.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://marketing.dengo-systems.com/'),
            'type': [1,2,3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-3.jpg',
            'name': 'savonstories.com',
            'link': $sce.trustAsResourceUrl('http://savonstories.com/'),
            'type': [2],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'from scratch',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-4.jpg',
            'name': 'hanrickcurran.com.au',
            'link': $sce.trustAsResourceUrl('http://www.hanrickcurran.com.au/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'JS fixes',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-5.jpg',
            'name': 'razts.com',
            'link': $sce.trustAsResourceUrl('http://www.razts.com/'),
            'type': [4],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'add a button that opens a lightbox with a url based on the selection.',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-6.jpg',
            'name': 'bundify.com',
            'link': $sce.trustAsResourceUrl('http://bundify.com/'),
            'type': [5],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'

        },
        {
            'url': 'assets/images/pic-7.jpg',
            'name': 'mlab.com',
            'link': $sce.trustAsResourceUrl('https://mlab.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'DB web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'userbump.com',
            'link': $sce.trustAsResourceUrl('http://userbump.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-9.jpg',
            'name': 'flowsparkstudios.com',
            'link': $sce.trustAsResourceUrl('http://www.flowsparkstudios.com/'),
            'type': [8],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-10.jpg',
            'name': 'testgamerz.com',
            'link': $sce.trustAsResourceUrl('http://www.testgamerz.com/'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-11.jpg',
            'name': 'sokolova.zp.ua',
            'link': $sce.trustAsResourceUrl('http://sokolova.zp.ua/'),
            'type': [10],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Interior design',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-12.jpg',
            'name': 'meet-street.com',
            'link': $sce.trustAsResourceUrl('http://meet-street.com'),
            'type': [9],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'cafe web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-13.jpg',
            'name': 'ice-cream.com.ua',
            'link': $sce.trustAsResourceUrl('http://ice-cream.com.ua/'),
            'type': [3],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'ice-cream',
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
            'name': 'mikesafe.com',
            'link': $sce.trustAsResourceUrl('http://www.mikesafe.com/'),
            'type': [6],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'vitual medical. Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'bluestocking.com.au',
            'link': $sce.trustAsResourceUrl('https://bluestocking.com.au/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'editing. Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'dealklick.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://www.dealklick.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'divineasiatours.com',
            'link': $sce.trustAsResourceUrl('http://divineasiatours.com/ru/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site. Feedbacks, advices',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'doctorcarparts.co.uk',
            'link': $sce.trustAsResourceUrl('http://www.doctorcarparts.co.uk/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'certitrade.se',
            'link': $sce.trustAsResourceUrl('https://certitrade.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'credoakademin.nu',
            'link': $sce.trustAsResourceUrl('http://credoakademin.nu/shop/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'sweetbeauty.se',
            'link': $sce.trustAsResourceUrl('http://sweetbeauty.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'ochaircare.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://ochaircare.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'pinuphouses.com',
            'link': $sce.trustAsResourceUrl('http://www.pinuphouses.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'lalestyle.com',
            'link': $sce.trustAsResourceUrl('http://www.lalestyle.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'tablastore.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://tablastore.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'inspiredbyelle.com',
            'link': $sce.trustAsResourceUrl('http://www.inspiredbyelle.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'intrepid-home.myshopify.com',
            'link': $sce.trustAsResourceUrl('http://intrepid-home.myshopify.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'viafancy.com',
            'link': $sce.trustAsResourceUrl('http://www.viafancy.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'e-shop',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'gavleungdom.se',
            'link': $sce.trustAsResourceUrl('http://www.gavleungdom.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'several web-sites',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'thailandforalla.se',
            'link': $sce.trustAsResourceUrl('http://thailandforalla.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'smartagrodan.se',
            'link': $sce.trustAsResourceUrl('http://www.smartagrodan.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'dev2.kreativabyran.se',
            'link': $sce.trustAsResourceUrl('http://dev2.kreativabyran.se/ffe/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'exactodent.se',
            'link': $sce.trustAsResourceUrl('http://exactodent.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'jonas.voby.se',
            'link': $sce.trustAsResourceUrl('http://jonas.voby.se/admin'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'bilbingokalendern.se',
            'link': $sce.trustAsResourceUrl('http://bilbingokalendern.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'assistanspartner.se',
            'link': $sce.trustAsResourceUrl('https://assistanspartner.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'dev4.voby.se',
            'link': $sce.trustAsResourceUrl('http://dev4.voby.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': '3mix.se',
            'link': $sce.trustAsResourceUrl('http://3mix.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'mytivoli.se',
            'link': $sce.trustAsResourceUrl('http://mytivoli.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'nocsatelier.com',
            'link': $sce.trustAsResourceUrl('http://www.nocsatelier.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'peroett.se',
            'link': $sce.trustAsResourceUrl('http://peroett.se/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'farghornan.se',
            'link': $sce.trustAsResourceUrl('http://farghornan.se/start'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'ukaqua.com',
            'link': $sce.trustAsResourceUrl('http://www.ukaqua.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'viknanovi.zp.ua',
            'link': $sce.trustAsResourceUrl('http://viknanovi.zp.ua/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'zooprodmag.com',
            'link': $sce.trustAsResourceUrl('http://zooprodmag.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'masjidmedia.com',
            'link': $sce.trustAsResourceUrl('http://www.masjidmedia.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'skybud.pl',
            'link': $sce.trustAsResourceUrl('http://www.skybud.pl/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'providesupport.com',
            'link': $sce.trustAsResourceUrl('http://www.providesupport.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'pfbmw.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://pfbmw.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'srduke.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://srduke.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'vincent.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://vincent.dengo-systems.com/fmcanada/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'foodprints.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://foodprints.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'yanishevskyi.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://yanishevskyi.dengo-systems.com/philipsarabura/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        },
        {
            'url': 'assets/images/pic-8.jpg',
            'name': 'artisan.dengo-systems.com',
            'link': $sce.trustAsResourceUrl('http://artisan.dengo-systems.com/'),
            'type': [7],
            'frontend': 'JQuery,Ajax,Bootstrap',
            'backend': 'PHP,Codeigniter',
            'mobile': 'IOS,Android',
            'desc': 'Informational web-site',
            'title': 'OMG'
        }
        
    ];
});

