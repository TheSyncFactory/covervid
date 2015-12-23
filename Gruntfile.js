module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["covervid.min.js"],

    uglify: {
      dist: {
        files: {
          'covervid.min.js': ['covervid.js'],
          'assets/scripts/scripts.min.js': ['assets/scripts/jquery.min.js', 'covervid.js', 'assets/scripts/scripts.js']
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/styles/styles.min.css': ['assets/styles/foundation.min.css', 'assets/styles/styles.css']
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.dev.html'
        }
      }
    },

    watch: {
      dist: {
        files: ['covervid.js', 'assets/**/*', '*.dev.html'],
        tasks: ['clean', 'uglify', 'cssmin', 'htmlmin', 'watch']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'htmlmin', 'watch']);
  grunt.registerTask('publish', ['clean', 'uglify', 'cssmin', 'htmlmin']);

};
