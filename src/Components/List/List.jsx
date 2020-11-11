import React from 'react';
import './List.scss';
import Task from '../Task/Task';
import { Droppable } from 'react-beautiful-dnd';


const List = props => {
    return (
        <Droppable droppableId="List">
            {(provided) => (
                <div className="col col-md-3 list" ref={provided.innerRef} {...provided.droppableProps}>
                    <h4 className="text-center">Task</h4>
                    <div>
                        {props.tasks.map(task => <Task task={task} tasks={props.tasks} text={task.text} id={task.id} setTasks={props.setTasks}/>)}
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default List;