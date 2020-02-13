import React from 'react'
import ReactDOM from 'react-dom'
import './css/main.css'
import Meniu from './components/Meniu'
import MainView from './components/MainView'

const App = () => {
    return (
        <div>
            <Meniu/>
            <MainView/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)