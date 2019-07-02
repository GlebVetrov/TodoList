import React from 'react';
import TodoList from './components/todo-list';
import TagList from './components/tag-list';

import './App.sass'

class App extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
    }

    state = {
      itemList: [
        
      ],
      tagList: [

      ]
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
    return (
      <div>        
        <div>
          <input ref={this.myRef} type="text" defaultValue={'I wanna go to #shop'}/>
          <input type='button' onClick={this.separateText} value='Add'/>
        </div> 
        <TodoList itemList={ itemList }/>
        <TagList tagList={ tagList }/>  
      </div>
    )
  }
}

export default App;
