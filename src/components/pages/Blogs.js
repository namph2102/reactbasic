import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Blogs() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setApi(data);
      });
  }, []);
  return (
    <div className="row ">
      {api.map((item) => (
        <div key={item.id} className="card col-3">
          <div className="card-body">
            <h5 className="card-title">{item.title + item.id}</h5>
            <p className="card-text">{item.title}</p>
            <Link
              to={`/blog/${item.id}`}
              state={item}
              className="btn btn-primary"
            >
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
