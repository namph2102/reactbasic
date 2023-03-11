import React from "react";
import { useParams } from "react-router-dom";

export default function Footer(props) {
  const { id } = useParams();
  console.log(props);
  return <footer className="bg-primary text-center text-light">FOOTER</footer>;
}
