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
            fruitsToDisplay: this.props.fruits,
            // Initialize the filter value to an empty string
            filterValue: ''
        }
    }

    handleFilterChange = (event) => {
        event.preventDefault()
        let filterValue = event.target.value
        // Remove the fruits that don't contain the filter value
        
    }
    
    render() {
        return(
            <div>
                <ul>
                    {/* <li>List will go here</li> */}
                </ul>
            </div>
        )
    }
}

export default FruitContainer