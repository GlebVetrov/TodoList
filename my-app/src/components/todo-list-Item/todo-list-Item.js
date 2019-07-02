import React from 'react';

class TodoListItem extends React.PureComponent {
    
    deleteItem = () => {
       const { id, cbDeleteItem, index} = this.props;
       cbDeleteItem(id, index);
    }

    render() {
    const {text} = this.props;

    return <li className="list-group-item ">
        <div>
            {text}
            <input type='button' value='edit'/>
            <input onClick={this.deleteItem} type='button' value='delete'/>
        </div>
    </li>
    }
}

export default TodoListItem;