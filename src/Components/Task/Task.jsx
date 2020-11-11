import React from 'react';
import './Task.scss';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {

    const deleteHandler = () => {
        props.setTasks(props.tasks.filter(element => element.id !== props.task.id));
    }

    return (
        <Draggable draggableId="ddlddldl" index={0}>
            {(provided) => (
                <div className="task d-flex justify-content-between" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <p className="d-flex align-items-content">{props.task.text}</p>
                    <button onClick={deleteHandler}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-backspace" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6.603 2h7.08a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7.08a1 1 0 0 1-.76-.35L1 8l4.844-5.65A1 1 0 
                            0 1 6.603 2zm7.08-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 
                            6.603 1h7.08zM5.829 5.146a.5.5 0 0 0 0 .708L7.976 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 
                            .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                        </svg>
                    </button>
                </div>
            )}
        </Draggable>
    )
}

export default Task;