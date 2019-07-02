import React from 'react';
import TagListItem from '../tag-list-item';

const TagList = (props) => {
    const {tagList, cbDeleteItem } = props;
    let showList = tagList.map((text, i) => <TagListItem cbDeleteItem={cbDeleteItem} key={i} id={i} text={text}/>);

    return <div>
        <ul>
            {showList}
        </ul>
    </div>
}

export default TagList;