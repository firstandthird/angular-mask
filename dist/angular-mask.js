
/*!
 * angular-mask - Angular directive for masks on input fields
 * v0.0.1
 * https://github.com/firstandthird/angular-mask/
 * copyright First + Third 2014
 * MIT License
*/
angular.module('ftMask', [])
  .directive('mask', [function() {
    return {
      link: function($scope, el, attrs) {

        var mask = attrs.mask;

        console.log(mask);


      }
    };
  }]);
