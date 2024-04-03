import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    state = {
        items: [],
        inputText: ''
    };
    handleInputChange = (event) =>{
        this.setState({ inputText: event.target.value});
    };

    handleAddItem = ()=> {
        if(this.state.inputText.trim()!== ''){
            this.setState(prevState =>({
                items: [...prevState.items, { id:Date.now(), text: prevState.inputText, isCompleted: false}], inputText:''
            }));
        }
    };
    toggleItemCompletion = (id)=> {
        this.setState(prevState=> ({
            items: prevState.items.map((item)=> item.id=== id? {...item, isCompleted: !item.isCompleted}: item)
        }));
    };

    render() {
        const {items, inputText} = this.state;
        const incompleteCount = items.filter((item)=> !item.isCompleted).length;

        return (
            <>
                <div>
                    <input
                    type="text"
                    value={inputText}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleAddItem}> Add</button>
                    <div className="task-counter">
                    {`${incompleteCount} remaining out of ${items.length} tasks`}
                </div>
                <ul>
                {items.map((item)=>(
                    <li 
                    key={item.id}
                    className={cx({"is-done": item.isCompleted})}
                    onClick={()=> this.toggleItemCompletion(item.id)}
                    >
                    {item.text}
                    </li>
                ))}
                </ul>
                
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                    .task-counter{
                        margin-bottom:10px;
                    }
                    ul{
                        list-style-type: disc;
                        padding-left:50px;
                        margin-top:0;
                    }
                    li{
                        cursor:pointer;
                        margin-bottom: 5px;
                    }
                    input{
                        margin-right: 5px;
                    }
                `}</style>
                </div>
            </>
        );
    }
}
