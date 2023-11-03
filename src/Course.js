import React from "react";

function Course({ image, title, description }) {
  // console.log(props);
  // const title = props.title;
  // const description = props.description;
  // const { title, description } = props;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <img src={image} alt="" />
    </div>
  );
}

export default Course;
