import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
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
