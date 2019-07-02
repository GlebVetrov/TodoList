import React from 'react';
import TodoListItem from '../todo-list-Item';

const TodoList = (props) => {
    const {itemList, cbDeleteItem} = props;
    let showList = itemList.map( (elem, i) => <TodoListItem cbDeleteItem={cbDeleteItem} key={i} id={i} index={elem.index} text={elem.value}/>);  
    return <ul className="list-group">
        {showList}
    </ul>
}

export default TodoList;