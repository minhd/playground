module.exports = function(grunt){
	//configuration goes here
	var yeomanConfig = {
		app: 'app',
		dist: 'dist'
	}
	grunt.initConfig({
		yeoman: yeomanConfig,
		copy:{
			dist:{
				files:[{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico, png, txt}',
						'.htaccess',
						'*.html'
					]
				}]	
			}
		},
		useminPrepare:{
			options: {
				dest: '<%= yeoman.dist %>',
				uglify: 'uglify'
			},
			html: '<%= yeoman.app %>/index.html'
		},
		usemin:{
			options: {
				dirs: ['<%= yeoman.dist %>']
			},
			html: ['<%= yeoman.dist %>/*.html'],
			css: ['<%= yeoman.dist %>/styles/css/*.css']
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git'
					]
				}]
			}
		},
		compass: {
			dev:{
				options: {
					sassDir: '<%= yeoman.app %>/styles/sass',
					cssDir: '<%= yeoman.app %>/styles/css',
					debugInfo: true
				}
			}
			
		}
	});
	require('load-grunt-tasks')(grunt);

	//define your tasks
	grunt.registerTask('default', [
		'build'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'compass',
		'copy:dist',
		'useminPrepare',
		'concat',
		'uglify',
		'usemin'
	]);
}