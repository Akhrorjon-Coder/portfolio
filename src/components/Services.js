import { useState } from "react";
import React from "react";

const Data = [
  {
    id: 1,
    icon: "fas fa-laptop-code",
    title: "Web Design",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
  },
  {
    id: 2,
    icon: "fas fa-code",
    title: "Web Development",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
  },
  {
    id: 3,
    icon: "fas fa-lightbulb",
    title: "Creative Web Design",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
  },
];

const Services = () => {
  const [items, setItems] = useState(Data);
  return (
    <section>
      <div className="servicesSection">
        <div className="servicesContent">
          <h2>Services</h2>
          <div className="cards">
            {items.map((elem) => {
              const { id, icon, title, discription } = elem;
              return (
                <div className="card" key={id}>
                  <i className={icon}></i>
                  <div className="title">
                    <h3>{title}</h3>
                    <div className="info">
                      <p>{discription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
