import { useState } from 'react'

export function TodoInput({ onAdd }) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input.trim()) {
      onAdd(input)
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button
        onClick={handleSubmit}
        disabled={!input.trim()}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  )
}
