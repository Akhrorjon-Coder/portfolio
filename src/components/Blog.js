import React, { useState } from "react";

const Data = [
  {
    id: 1,
    image: "blog/1.jpg",
    title: "Responsive Web Design",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has it to make a type specimen book",
    tag: "Html Scss",
  },
  {
    id: 2,
    image: "blog/2.jpg",
    title: "Responsive Web Design",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has it to make a type specimen book",
    tag: "Html Scss",
  },
  {
    id: 3,
    image: "blog/2.jpg",
    title: "Responsive Web Design",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has it to make a type specimen book",
    tag: "Html Scss",
  },
];

const Blog = () => {
  const [items, setItems] = useState(Data);
  return (
    <section>
      <h2>Blog</h2>
      <div className="blogSection">
        <div className="blogContainer">
          <div className="container">
            {items.map((elem) => {
              const { id, image, title, discription, tag } = elem;
              return (
                <div className="card" key={id}>
                  <div className="imgCard">
                    <img src={image} alt="blog img" />
                  </div>
                  <div className="contentText">
                    <h3>{title}</h3>
                    <p>{discription}</p>
                    <p>
                      Tags: <span>{tag}</span>
                    </p>
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

export default Blog;
