import { TodoInterface } from './types';

// interface for Todo, which includes toggle handler
interface TodoProps{
    todoItem: TodoInterface;
    toggle: (id: string) => void;
    remove: (id: string) => void;
}

function Todo({todoItem, toggle, remove}: TodoProps){

    return(
        <div className="Todo">
            <li 
            className="Todo-item"
            onClick={() => toggle(todoItem.id)}
            style={{textDecoration: todoItem.isCompleted? 'line-through' : 'none'}}
            >
                {todoItem.task}
            </li>
            <button 
            className="Todo-button"
            onClick={() => remove(todoItem.id)}>
                X
            </button>
        </div>

    )
}

export default Todo;