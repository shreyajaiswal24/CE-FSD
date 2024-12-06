import "./MainLayout.css";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>It is Home page</h1>
      <nav>
        <ul className="aa">
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
