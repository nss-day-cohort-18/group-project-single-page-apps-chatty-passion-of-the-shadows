module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"Chatty":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss'
        }
      }
    },
    copy: { //for bootstrap and jquery - only need to do the first time.
      materialize: {
        expand: true,
        cwd: 'node_modules/materialize-css/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'], 
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      css: {
        files: ['../css/**/*.css'],
        tasks: ['css']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'copy', 'watch']);
};