import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

import Todo from './Todos/SingleTodo'
import { describe, it, expect, vi } from 'vitest'

describe('Todo component', () => {
	const deleteTodo = vi.fn()
	const completeTodo = vi.fn()
	it('renders todo text', () => {
		const todo = { _id: '1', text: 'Test todo', done: false }

		render(
			<Todo
				todo={todo}
				onClickDelete={deleteTodo}
				onClickComplete={completeTodo}
			/>
		)
		expect(screen.getByText('Test todo')).toBeDefined()
	})

	it('calls completeTodo when button clicked', () => {
		const todo = { _id: '2', text: 'Do this', done: false }
		render(
			<Todo
				todo={todo}
				onClickComplete={completeTodo}
				deleteTodo={deleteTodo}
			/>
		)

		const buttons = screen.getAllByText('Set as done')
		fireEvent.click(buttons[1])
		expect(completeTodo).toHaveBeenCalledWith(todo)
	})
})

