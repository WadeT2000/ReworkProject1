import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="Bar">
          <button className="Return">
            <Link to="/">Home</Link>
          </button>          
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;