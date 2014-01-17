module.exports = function(grunt) {

  require('fatjs')(grunt, {
    name: 'angular-mask',
    full: true, //include bower deps in build
    filename: 'angular-mask', //no ext
    fullFilename: 'angular-mask.full' //no ext
  });

};
