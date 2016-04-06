Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	// General routes
	this.route('home', {
		path: '/',
		template: 'home'
	});
	this.route('about');
	this.route('work');
	this.route('blog', {
		path: '/blog',
		template: 'blog'
	});
	this.route('contact');

	// Posts routes
	this.route('list_posts',{
		path:'/admin/posts',
		template:'list_posts',
		data: function(){
			templateData = {
				posts: Posts.find()
			};
			return templateData;
		},
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('add_posts',{
		path:'/admin/posts/add',
		template:'add_post',
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('edit_posts',{
		path:'/admin/posts/:_id/edit',
		template:'edit_post',
		data: function(){
			var currentPost = this.params._id;
			return Posts.findOne({_id: currentPost});
		},
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});

	// Projects routes
	this.route('list_projects',{
		path:'/admin/projects',
		template:'list_projects',
		data: function(){
			templateData = {
				projects: Projects.find()
			};
			return templateData;
		},
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('add_projects',{
		path:'/admin/projects/add',
		template:'add_project',
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('edit_projects',{
		path:'/admin/projects/:_id/edit',
		template:'edit_project',
		data: function(){
			var currentProject = this.params._id;
			return Projects.findOne({_id: currentProject});
		},
		onBeforeAction: function(){
			if (!Meteor.user() || Meteor.user() == null) {
				Router.go('/');
			}
			this.next();
		}
	});

	// Login route
	this.route('login',{
		path:'/admin',
		template:'login'
	});

});