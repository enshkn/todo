import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import './App.css'

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodos()

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 Todo App</h1>
          <p className="subtitle">Organize your tasks</p>
        </header>

        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          filter={filter}
          onFilterChange={setFilter}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
  )
}

export default App
