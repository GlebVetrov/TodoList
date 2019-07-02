import React from 'react';
import TodoList from './components/todo-list';
import TagList from './components/tag-list';

import './App.sass'

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
    }

    state = {
      itemList: [
        {value: "I wanna go to", index: "shop"},
        {value: "I wanna go to", index: "shop"},
        {value: "I wanna go to", index: "shop"},
        {value: "I wanna go to", index: "ship"}
      ],
      tagList: [
        "shop",
        "ship"
      ]
    }

    deleteItem = (id, value) => {
      let {itemList} = this.state;
      itemList = itemList.slice();
      itemList = [...itemList.slice(0, id),
                  ...itemList.slice(id + 1)];
      this.setState({itemList: itemList}); 
      if (!itemList.some((elem) => elem.value === value)) {
        this.deleteTag(value);
      }      
    }

    deleteTag = (value) => {
      let {tagList} = this.state;
      tagList = tagList.slice();
      let id = tagList.indexOf(value);
      if (id !== -1) {
      tagList = [...tagList.slice(0, id),
                ...tagList.slice(id + 1)];
      this.setState({tagList: tagList});
      }
    }

    addItem = (str, tag) => {      
      let {itemList} = this.state;
      itemList = itemList.slice();
      let item = {
        value: str,
        index: tag
      }      
      itemList.push(item);
      this.setState({itemList: itemList}); 
    }

    separateText = () => {
      if (this.myRef.current.value === '') {
        return;
      }
      let str = this.myRef.current.value;
      let index = str.lastIndexOf('#');      
      let item = str.slice(0, index).trim();
      let tag = str.slice(index+1).trim();      
      this.addItem(item, tag);
      this.addTag(tag);
      this.myRef.current.value = '';
    }

    addTag = (str) => {
      let {tagList} = this.state;
      if (!tagList.some((tag) => tag === str)){
        tagList.push(str);
        this.setState({tagList: tagList});
      }
      return;
    }

  render() {
    let { itemList, tagList } = this.state;
    console.log(itemList, tagList)
    return (
      <div>        
        <div>
          <input ref={this.myRef} type="text" defaultValue={'I wanna go to #shop'}/>
          <input type='button' onClick={this.separateText} value='Add'/>
        </div> 
        <TodoList itemList={ itemList } cbDeleteItem={this.deleteItem}/>
        <TagList tagList={ tagList }/>  
      </div>
    )
  }
}

export default App;
