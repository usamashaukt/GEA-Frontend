import React from "react";
import "./VisaAssistance.css"; // Assuming you place the styles in this file

const VisaAssistance = () => {
  const cards = [
    {
      title: "University Selection Assistance",
      description:
        "Navigating through the vast array of universities worldwide can be overwhelming. Our consultants provide expert guidance to help you choose a university that aligns with your academic goals, preferences, and budget.",
      image: "/assets/images/studentpics/student3.jpg",
    },
    {
      title: "Application Support",
      description:
        "Crafting a compelling application is crucial for securing admission to your desired university. We offer meticulous assistance throughout the application process, ensuring your application stands out and maximizes your chances of acceptance.",
      image: "/assets/images/studentpics/student3.jpg",
    },
    {
      title: "Visa & Immigration Guidance",
      description:
        "Understanding visa requirements and navigating immigration procedures can be daunting. Our experienced team provides comprehensive support and guidance to streamline the visa application process, ensuring compliance with all regulations.",
      image: "/assets/images/studentpics/student3.jpg",
    },
    {
      title: "Scholarship & Financial Aid",
      description:
        "Financing your international education can be challenging, but it shouldn't be a barrier to your dreams. We assist students in exploring scholarship opportunities, financial aid options, and other funding sources to make their education affordable.",
      image: "/assets/images/studentpics/student3.jpg",
    },
    {
      title: "Test Preparation Support",
      description:
        "Achieving the required scores in standardized tests is essential for admission to many universities. Our test preparation services equip students with the skills and strategies needed to excel in exams such as the TOEFL, IELTS, SAT, GRE, and GMAT.",
      image: "/assets/images/studentpics/student3.jpg",
    },
    {
      title: "Pre-Departure Guidance",
      description:
        "Preparing for life in a new country involves various logistical and cultural aspects. We offer pre-departure orientation sessions to provide students with essential information, tips, and resources for a smooth transition to their host country.",
      image: "/assets/images/studentpics/student3.jpg",
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div className="card card-assistance" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <h3 className="card-title-assistance">{card.title}</h3>
          <p className="card-description-assistance">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VisaAssistance;
