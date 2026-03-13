import { TodoItem } from './TodoItem'
import { TodoFilter } from './TodoFilter'

export function TodoList({
  todos,
  filter,
  onFilterChange,
  onDelete,
  onToggle,
  onEdit,
}) {
  const isEmpty = todos.length === 0

  return (
    <div className="todo-list-container">
      <TodoFilter filter={filter} onFilterChange={onFilterChange} />

      <div className="todo-list">
        {isEmpty ? (
          <div className="empty-state">
            {filter === 'all' && '📝 No todos yet. Add one to get started!'}
            {filter === 'active' && '✅ All todos are completed!'}
            {filter === 'completed' && '📋 No completed todos yet.'}
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  )
}
