import React from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import '../css/todo.css'

function TodoPage() {
    return (
        <div className='container todo-app'>
            <div className="row justify-content-md-center mt-10">
                <TodoList />
            </div>
        </div>
    )
}

export default TodoPage
