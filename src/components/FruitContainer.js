// Main establishment
import React, { Component } from 'react'

// Components
import Input from './Input'
import List from './List'

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            // Initialize fruit list to the full list passed into props
            fruitsToDisplay: props.fruits,
            // Initialize the filter value to an empty string
            filterValue: ''
        }
    }

    handleFilterChange = (event) => {
        event.preventDefault()
        let filterValue = event.target.value
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        // Reset state
        this.setState({ fruitsToDisplay: filteredFruitList, filterValue })
    }
    
    render() {
        console.log('---- state ----')
        console.log(this.state.fruitsToDisplay)
        console.log('---- props ----')
        console.log(this.props.fruits)
        
        return(
            <div>
                <ul>
                    <Input
                        value={this.state.filterValue}
                        onChange ={this.handleFilterChange}
                    />
                    <List
                        fruits={this.state.fruitsToDisplay}
                    />
                </ul>
            </div>
        )
    }
}

export default FruitContainer