import React from 'react';
import TagListItem from '../tag-list-item';

const TagList = (props) => {

    let tagList = props.tagList.map((text, i) => <TagListItem key={i} text={text}/>);

    return <div>
        {tagList}
    </div>
}

export default TagList;