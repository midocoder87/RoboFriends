import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robot} from './robot';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robot: robot,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})

	}

	render() {
		const filteredRobot = this.state.robot.filter (robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc ma5'>
				<h1 className='f1-m'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robot={filteredRobot}/>
				</Scroll>
			</div>
		);
	}
}

export default App;