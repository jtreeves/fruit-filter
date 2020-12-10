import './App.css'
import FruitContainer from './components/FruitContainer'

function App() {
    const fruits = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'crabapple', 'grape', 'grapefruit', 'mango', 'starfruit']

    return (
        <div className='App-header'>
            <h1>Fruit Filter</h1>
            <FruitContainer fruits={fruits} />
        </div>
    )
}

export default App