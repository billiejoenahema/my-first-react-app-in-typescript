import React from 'react'
import Counter from './Counter'
import CounterWithReducer from './CounterWithReducer'

interface AppProps {
    message?: string
    description?: string
}

const App: React.FC<AppProps> = ({ message }) => {
    return (
        <div>
            <Counter />
            <CounterWithReducer />
        </div>
    )
}

App.defaultProps = {
    message: 'Hello, DefaultProps!',
    description: 'This is App component.'
}

export default App
