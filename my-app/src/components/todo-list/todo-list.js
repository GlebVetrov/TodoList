import React from 'react';
import TodoListItem from '../todo-list-Item';

const TodoList = (props) => {

    let showList = props.itemList.map( (elem, i) => <TodoListItem key={i} text={elem.value}/>);  
    return <ul className="list-group">
        {showList}
    </ul>
}

export default TodoList;