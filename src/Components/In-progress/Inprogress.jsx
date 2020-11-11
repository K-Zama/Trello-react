import React from 'react';
import './Inprogress.scss';
import { Droppable } from 'react-beautiful-dnd';

const Inprogress = () => {
    return (
        <div className="col col-md-3 in-progress">
            <Droppable droppableId="In-Progress">
                {(provided) =>
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <h4 className="text-center">In Progress</h4>
                    </div>
                }
            </Droppable>
        </div>
    )
}

export default Inprogress;