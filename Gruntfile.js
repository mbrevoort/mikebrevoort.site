module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
      options: {
        banner: '/*! Mike Brevoort (c) <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        wrap: 'wrapped'
      },
      'site': {
        options: {
        },

        files:  {
          'js/site.min.js' : [ 'js/main.js']
        }
      }
    },

    sass: {                              // Task
      options: {
        loadPath: 'sass/bourbon'
      },
      dist: {                            // Target
        files: {                         // Dictionary of files
          'css/main.css': 'sass/main.scss'       // 'destination': 'source'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass' ]);

};
