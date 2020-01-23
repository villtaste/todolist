import React from 'react';
//import ReactDOM from 'react-dom';
import './toDo.css';

class ToDoListItem extends React.Component{
    render(){
        const {
            title,
            description,
            ...props
        } = this.props;
        //console.log(this.props)
        return (
            <div className="toDoListGrid">
                <div className="toDoListItem" {...props}>
                    <div className="toDoListItem_title">{title}
                    </div>
                    <div className="toDoListItem_description">{description}
                    </div>
                </div>
            </div>
    );
    }
}

export default ToDoListItem;