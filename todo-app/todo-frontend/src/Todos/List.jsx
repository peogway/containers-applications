import SingleTodo from './SingleTodo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
	return (
		<>
			{todos.map((todo, idx) => {
				return (
					<SingleTodo
						key={todo._id}
						todo={todo}
						onClickDelete={deleteTodo}
						onClickComplete={completeTodo}
					/>
				)
			})}
		</>
	)
}

export default TodoList
