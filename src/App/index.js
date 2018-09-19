import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MainPage from './view'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <MainPage />
            </Provider>
        );
    }
}

export default App;
