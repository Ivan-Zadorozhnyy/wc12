import React from 'react';
import NewTaskForm from './NewTaskForm';
import '../../styles/DayExpanded.css';


const DayExpanded = () => {
    return (
        <div className="day-expanded">
            <h3>Day Details</h3>
            {/* Add any other day details you wish to display here */}
            <NewTaskForm />
        </div>
    );
};

export default DayExpanded;
