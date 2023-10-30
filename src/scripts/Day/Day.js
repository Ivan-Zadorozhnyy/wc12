import React from 'react';
import Task from './Task';
import Button from '../Button';
import '../../styles/Day.css';


const Day = ({ dayName }) => {
    const tasks = [
        { title: 'Task 1', description: 'Description 1', startTime: '10:00 AM', endTime: '11:00 AM' },
        // Add more tasks as needed
    ];

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">{dayName}</div>
                <div className="card-body">
                    {tasks.map((task, index) => (
                        <Task key={index} {...task} />
                    ))}
                    <Button text="Expand" />
                </div>
            </div>
        </div>
    );
};

export default Day;
