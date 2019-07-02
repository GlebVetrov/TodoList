import React from 'react';

const TodoListItem = (props) => {
    const {text} = props;

    return <li className="list-group-item ">
        <div>
            {text}
            <input type='button' value='edit'/>
            <input type='button' value='delete'/>
        </div>
    </li>
}

export default TodoListItem;