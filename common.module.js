(function() {
"use strict";

angular.module('common', [])
//.constant('ApiPath', 'https://nex3z-restaurant.herokuapp.com')
.constant('ApiPath', 'https://www.davidchuschinabistro.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
