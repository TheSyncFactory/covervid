module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["covervid.min.js"],

    uglify: {
      dist: {
        files: {
          'covervid.min.js': ['covervid.js'],
          'public/assets/scripts/scripts.min.js': ['scripts/jquery.min.js', 'covervid.js', 'scripts/scripts.js']
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
          'public/assets/styles/styles.min.css': ['styles/foundation.min.css', 'styles/styles.css']
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
          'public/index.html': 'index.html',
          'public/privacy/index.html': 'privacy.html'
        }
      }
    },

    watch: {
      dist: {
        files: ['covervid.js', 'styles/*', 'scripts/*', 'dist/assets/images/*', 'dist/assets/videos/*', '*.html'],
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
