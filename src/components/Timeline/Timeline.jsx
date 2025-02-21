// src/components/Timeline/Timeline.jsx
import React from 'react';

const Timeline = () => {
    const activities = [
        { time: '12 min ago', text: 'Earned 500 points' },
        { time: '12 min ago', text: 'Joined the Program' },
        { time: '35 min ago', text: '8 Invoices have been paid' },
        { time: '52 min ago', text: 'Order #37745' },
    ];

    return (
        <div className="card p-3">
            <h5>User Activity Timeline</h5>
            <ul className="list-group list-group-flush">
                {activities.map((activity, index) => (
                    <li key={index} className="list-group-item">
                        {activity.text} <span className="text-muted float-end">{activity.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
