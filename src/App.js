import './App.scss';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

//Components
import List from './Components/List/List';
import Inprogress from './Components/In-progress/Inprogress';
import Done from './Components/Done/Done';
import Form from './Components/Form/Form';



function App() {

  const [text, setText] = useState ("");
  const [tasks, setTasks] = useState([])

  

  return (
    <div className="container-fluid">
      <div className="row">
        <Form text={text} setText={setText} tasks={tasks} setTasks={setTasks}/>
      </div>
     <DragDropContext>
        <div className="row d-flex justify-content-around mt-5">
          <List tasks={tasks} setTasks={setTasks}/>
          <Inprogress />
          <Done />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
