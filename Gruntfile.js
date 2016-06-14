var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      dev: {
        options: {
          open:
          {
  target: 'http://localhost:8000/'
},
          livereload: true
        }
      }
    },
    watch: {
      www: {
        files: [ 'index.html'],
        options: {
          livereload: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', '', function() {
    
  });

  grunt.registerTask('serve', ['connect' ,'watch']);

};
