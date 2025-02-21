import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const timelineData = [
        {
            id: 1,
            title: "Earned 500 points",
            description: "Earned 500 points.",
            icon: "📄",
            link: "Invoices.pdf",
            time: "12 min ago",
            color: "red",
        },
        {
            id: 2,
            title: "Joined the Program",
            description: "Customer joined the Program.",
            icon: "👋",
            time: "12 min ago",
            color: "purple",
        },
        {
            id: 3,
            title: "8 Invoices have been paid",
            description: "Invoices have been paid to the company.",
            icon: "📑",
            time: "35 min ago",
            color: "green",
        },
        {
            id: 4,
            title: "Order #37745",
            description: "Invoices have been paid to the company.",
            icon: "🏦",
            time: "52 min ago",
            color: "blue",
        },
    ];

    return (
        <div className="timeline-container">
        <h5>User Activity Timeline</h5>
            {timelineData.map((item, index) => (
                <div key={item.id} className="timeline-item">
                    {/* Timeline Content */}
                    <div className="timeline-icon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-description">{item.description}</p>
                        {item.link && (
                            <a href="#" className="timeline-link">
                                {item.link}
                            </a>
                        )}
                        <p className="timeline-time">{item.time}</p>
                    </div>
                    {/* Dot Below Item */}
                    <div className="timeline-dot" style={{ backgroundColor: item.color }}></div>
                    {/* Connecting Line (Skip for Last Item) */}
                    {index !== timelineData.length - 1 && (
                        <div className="timeline-connector"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
