import React from 'react'
import Counter from './Counter'

interface AppProps {
    message?: string
    description?: string
}

const App: React.FC<AppProps> = ({ message }) => {
    return (
        <div>
            <Counter />
        </div>
    )
}

App.defaultProps = {
    message: 'Hello, DefaultProps!',
    description: 'This is App component.'
}

export default App
