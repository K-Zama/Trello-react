import React from 'react';


const Form = (props) => {
    
    const handleChange = (e) => {
        props.setText(e.target.value);
      }
    
      const handleClick = (e) => {
        e.preventDefault();
        props.setTasks(
          [
            ...props.tasks,
            {text: props.text, completed: false, id: Math.random() * 1000}
          ]
        )
    
      }
    return(
        <div className="col d-flex justify-content-center">
          <div className="input-group mb-3 input-task">
            <input type="text" className="form-control" placeholder="Task" onChange={handleChange}/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-circle-fill" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Form;