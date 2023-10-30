import React from 'react';
import '../../styles/NewTaskForm.css';


const NewTaskForm = () => {
    return (
        <form className="new-task-form">
            <div className="form-group">
                <label>Task Title</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Start Time</label>
                <input type="time" className="form-control" />
            </div>
            <div className="form-group">
                <label>Duration (minutes)</label>
                <input type="number" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
