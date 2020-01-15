import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task.js';

class Tasks extends Component {
	render() {
		return this.props.tasks.map(tsk => <Task key={tsk.id} task={tsk}/>); 
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired
}

export default Tasks;