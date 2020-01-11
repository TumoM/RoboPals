import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import "./App.css";



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield:event.target.value
        })
        
        
    }

    render(){
        const filtered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filtered}/>
            </div>
        )
    }
}

export default App