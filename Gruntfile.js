module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
                {
                  width: 300,
                  quality: 60
                },
                {
                  width: 400,
                  quality: 60
                },
                {
                  width: 600,
                  quality: 60,
                  suffix: '_2x'
                },
                {
                  width: 800,
                  quality: 60,
                  suffix: '_2x'
                }
              ]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images/',
            dest: 'img/'
          }]
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
  
  };
  