import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Jobs", value: 40, color: "#9b51e0" }, // Purple
    { name: "Dhaba", value: 30, color: "#eb5757" }, // Red
    { name: "Mech", value: 20, color: "#f2c94c" }, // Orange
    { name: "Convoy", value: 25, color: "#6fcf97" }, // Green
    { name: "Profile", value: 35, color: "#56ccf2" }, // Blue
    { name: "Others", value: 15, color: "#ff82c9" }, // Pink
];

const TopTimeline = () => {
    return (
        <div className="top-timeline-container">
            <h3 className="top-timeline-title">Top Timeline</h3>
            <div className="top-timeline-chart">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={12}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TopTimeline;
