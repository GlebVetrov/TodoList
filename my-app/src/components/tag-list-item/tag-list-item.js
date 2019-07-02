import React from 'react';

class TagListItem extends React.PureComponent {

    deleteItem = () => {
        const {id, cbDeleteItem} = this.props;
        cbDeleteItem(id);
    }
    
    render() {
    const {text} = this.props;

    return  <li>
                <button>{text} </button><button onClick={ this.deleteItem } >X</button > 
            </li>
    }    
}

export default TagListItem;