import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const Timeline = () => {
  const timelineData = [
    {
      date: "2024",
      title: "Master's in AI and Robotics",
      description: "Currently pursuing my Master's degree in AI and Robotics.",
    },
    {
      date: "2023",
      title: "AI Developer at XYZ",
      description:
        "Worked as an AI Developer, focusing on machine learning projects.",
    },
    {
      date: "2022",
      title: "Graduated in Mechatronic Engineering",
      description: "Graduated with honors from University of Technology.",
    },
    {
      date: "2015",
      title: "Graduated in Mechatronic Engineering",
      description: "Graduated with honors from University of Technology.",
    },
  ];

  return (
    <div className="timeline-container ">
      <h2 className="title">
        {" "}
        <FaBriefcase className="experience-icon" />
        Experience
      </h2>
      <div className="time-line-container">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <span className="timeline-date">{event.date}</span>
              <p className="timeline-desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
