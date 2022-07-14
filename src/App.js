import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th, 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th, 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th, 2:30pm',
        reminder: false,
    },
])

  // Delete Task
  const deleteTask = (id) => {
    alert('Delete Task')
  }

  return (
    <div className="container">
      <Header title='kuzgkhfgkf' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>

  );
}

export default App;
