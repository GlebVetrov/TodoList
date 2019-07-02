import React from 'react';

const TagListItem = (props) => {
    const {text} = props;
    return  <div>
                <button>{text} </button><button>X</button > 
            </div>
}

export default TagListItem;