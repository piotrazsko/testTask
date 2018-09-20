import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store , persistor } from './store/configureStore'
import MainPage from './view'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MainPage />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
