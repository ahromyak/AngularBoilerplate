
var cjs=angular.module('myApp',['ui.router']);cjs.controller('mainController',['$scope',function($scope){var acc=document.getElementsByClassName("accordion");var i;for(i=0;i<acc.length;i++){acc[i].onclick=function(){this.classList.toggle("active");this.nextElementSibling.classList.toggle("show");}}
$scope.mainTest='Hello world';}]);cjs.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/home");var homeState={name:'home',url:'/home',controller:'homeController',templateUrl:'app/components/home/html/home.html'};var projectsState={name:'projects',url:'/projects',controller:'projectsController',templateUrl:'app/components/projects/html/index.html'};var backendState={name:'backend',url:'/backend',controller:'backendController',templateUrl:'app/components/backend/html/index.html'};var mobileState={name:'mobile',url:'/mobile',controller:'mobileController',templateUrl:'app/components/mobile/html/index.html'};var frontendtState={name:'frontend',url:'/frontend',controller:'frontendController',templateUrl:'app/components/frontend/html/index.html'};var cmsState={name:'cms',url:'/cms',controller:'cmsController',templateUrl:'app/components/cms/html/index.html'};var designState={name:'design',url:'/design',controller:'designController',templateUrl:'app/components/design/html/index.html'};var codeigniterState={name:'backend.codeigniter',url:'/codeigniter',controller:'designController',templateUrl:'app/components/design/html/index.html'};var zendState={name:'backend.zend',url:'/zend',controller:'mobileController',templateUrl:'app/components/mobile/html/index.html'};$stateProvider.state(homeState);$stateProvider.state(projectsState);$stateProvider.state(backendState);$stateProvider.state(mobileState);$stateProvider.state(frontendtState);$stateProvider.state(cmsState);$stateProvider.state(designState);$stateProvider.state(codeigniterState);$stateProvider.state(zendState);});cjs.controller('backendController',['$scope',function($scope){$scope.mainTest='backend Hello world';}]);cjs.controller('cmsController',['$scope',function($scope){$scope.mainTest='cms Hello world';var dialog=document.querySelector('dialog');var showDialogButton=document.querySelector('#show-dialog');if(!dialog.showModal){dialogPolyfill.registerDialog(dialog);}
showDialogButton.addEventListener('click',function(){dialog.showModal();});dialog.querySelector('.close').addEventListener('click',function(){dialog.close();});}]);cjs.controller('designController',['$scope',function($scope){$scope.mainTest='design Hello world';}]);cjs.controller('frontendController',['$scope',function($scope){$scope.mainTest='frontend Hello world';}]);cjs.controller('homeController',['$scope',function($scope){$scope.mainTest='home Hello world';}]);cjs.controller('mobileController',['$scope',function($scope){$scope.mainTest='mobile World Hello';}]);cjs.controller('projectsController',['$scope',function($scope){$scope.mainTest='project Hello world';}]);