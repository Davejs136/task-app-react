import React, { Component } from 'react';

class TaskForm extends Component {

	state = {
		title: '',
		description: ''
	}

	onSubmit = e => {
		e.preventDefault()
		consle
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return(
			<form onSubmit={ this.onSubmit }>
				<input 
					type="text" 
					name="title"
					placeholder="Write a Task" 
					onChange={ this.onChange } 
					value={this.state.title}
				/>
				<br/>
				<textarea 
					placeholder="Write a description" 
					name="description"
					onChange={ this.onChange } 
					value={this.state.description}>
						
				</textarea>
				<br/>
				<button type="submit">
					Send
				</button>
			</form>
		)
	}
}

export default TaskForm;