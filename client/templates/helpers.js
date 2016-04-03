Template.login.events({
	'submit .login-user': function(event) {
		var email = event.target.email.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(email, password, function(err) {
			if (err) {
				event.target.email.value = email;
				event.target.email.value = password;
			} else {

			}
		});
	}
});