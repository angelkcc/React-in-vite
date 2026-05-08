import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Use from './Use'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Use/>
      </Provider>
    </div>
  )
}

export default App
