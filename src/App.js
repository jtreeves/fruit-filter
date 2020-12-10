import './App.css'
import Input from './components/Input'
import List from './components/List'
import FruitContainer from './components/FruitContainer'

function App() {
    return (
        <div className='App-header'>
            <h1>Fruit Filter</h1>
            <Input />
            <List />
            <FruitContainer />
        </div>
    )
}

export default App