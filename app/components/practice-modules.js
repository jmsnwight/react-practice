var React = require('react');
var ReactDOM = require('react-dom');


// Userslist
var UsersList = React.createClass({
	render: function() {
		return (
			<div className="users">
				<h3> Online Users</h3>
				<ul>
					{
						this.props.users.map((user, i) => {
							return (
								<li key={i}>
									{user}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
});


// Message 
var Message = React.createClass({
		render: function() {
			return (
				<div className="message">
					<strong>{this.props.user} :</strong>
					<span>{this.props.text}</span>
				</div>
			);
		}
	});

// Message list
var MessageList = React.createClass({
	render: function() {
		return (
			<div className="messages">
				<h2> Conversation </h2>
				{
					this.props.messages.map((message, i) {
						return (
							<Message 
								key={i}
								user={message.user}
								text={message.text}
							/>
						);
					});
			</div>
		);
	}
});