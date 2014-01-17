angular.module('ftMask', [])
  .directive('mask', [function() {
    return {
      link: function($scope, el, attrs) {

        var mask = attrs.mask;

        console.log(mask);


      }
    };
  }]);
