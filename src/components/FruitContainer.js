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
        // Inside of Input component, to access props, I will say props.value
        // Inside of List component, to access props, I will say props.fruits
        // You can console.log before the return, but not inside it
        console.log('Inside Fruit Container')

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