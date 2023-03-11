import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Blog(props) {
  console.log(useParams());
  console.log(useLocation().state);
  const { title } = useLocation().state;
  return <div>{title}</div>;
}
