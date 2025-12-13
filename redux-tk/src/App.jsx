import React from 'react'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'
import { store } from './app/store'

const App = () => {
  return (
    <div className=''>
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App