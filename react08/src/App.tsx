import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskContext } from './Contexts/TaskContext'
import { TaskList } from './Components/TaskList'
import { AddTask } from './Components/AddTask'

function App() {

  return (
    <div className="App">
      <TaskContext>
        <h1>React + Reducer</h1>
        <h3>Tasks</h3>
        <AddTask />
        <TaskList/>
      </TaskContext>
    </div>
  )
}

export default App
