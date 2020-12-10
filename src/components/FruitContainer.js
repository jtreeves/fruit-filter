// Import React's Component
import React, { Component } from 'react'

// Import other components
import Input from './Input'
import List from './List'

// Create class
class FruitContainer extends Component {
    // Create constructor
    constructor(props) {
        super()
        this.state = {
            // Initialize fruit list to the full list passed into props
            fruitsToDisplay: props.fruits,
            // Initialize the filter value to an empty string
            filterValue: ''
        }
    }

    // Create function for filtering
    handleFilterChange = (event) => {
        event.preventDefault()
        // Grab text inputed by user
        let filterValue = event.target.value
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        // Reset state
        this.setState({ fruitsToDisplay: filteredFruitList, filterValue })
    }
    
    render() {
        // Log the states and props, as they adjust based on different filter queries
        console.log('---- state ----')
        console.log(this.state.fruitsToDisplay)
        console.log('---- props ----')
        console.log(this.props.fruits)

        return(
            <div>
                <ul>
                    {/* Send info to Input to use as props */}
                    <Input
                        value={this.state.filterValue}
                        onChange ={this.handleFilterChange}
                    />
                    {/* Send info to List to use as props */}
                    <List
                        fruits={this.state.fruitsToDisplay}
                    />
                </ul>
            </div>
        )
    }
}

export default FruitContainer