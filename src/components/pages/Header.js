import { Link, NavLink } from "react-router-dom";
export default function Header() {
  console.log("re-render home");
  console.log("re-drender");
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width={40}
              height={32}
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-secondary ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/content" className="nav-link px-2 text-white">
                Content
              </NavLink>
            </li>
            <li>
              <NavLink to="/todo" className="nav-link px-2 text-white ">
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="nav-link px-2 text-white ">
                blogs
              </NavLink>
            </li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
